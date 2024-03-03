$(document).ready(function(){
  // Check saved state for right-click function and only enable right click if the user wants to use it (enabled by default).
  chrome.storage.local.get(['right_click_enabled_ZD_ext'], function(result) { 
    if (result.right_click_enabled_ZD_ext !== "disabled" || result.right_click_enabled_ZD_ext == null || result.right_click_enabled_ZD_ext == undefined) { 
      activateRightClickOnZdTicketNewtab();
    }
  });

  // Other code to run after the page is loaded.

});

function activateRightClickOnZdTicketNewtab() {
  document.addEventListener('contextmenu', event => {
    const targetElement = event.target.closest('tr[data-test-id="table-regular-row"], tr[data-garden-id="tables.row"]');
    if (targetElement && event.button === 2) { // Check for right-click
      // Highlight the element once
      targetElement.setAttribute('style', 'background:pink !important; background-color:pink !important'); // Set color after right click 
      targetElement.setAttribute('rightclick_check', 'true');

      // Find an anchor tag within the clicked element and get its href
      const link = targetElement.querySelector('a');
      if (link && link.href) {
        // Send a message to background script to open the link in a new tab in the background
        chrome.runtime.sendMessage({
          action: "openInNewTabInBackground",
          url: link.href
        });
      }
      event.preventDefault(); // Prevents the default context menu
    }
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "reset") {
    // Reset the background color of highlighted elements
    document.querySelectorAll('tr[data-test-id="table-regular-row"], tr[data-garden-id="tables.row"]').forEach(el => {
      el.style.backgroundColor = '';
    });
  }
});


// Function to trigger the sliding page
function triggerSlidingPage() {
  const slidingButton = document.querySelector('[ng-click="toggleRightPanel()"]');
  if (slidingButton) {
    slidingButton.click(); // Simulate a click event on the button
  }
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'executePopupScript') {
    // Trigger the sliding page
    triggerSlidingPage();
  }
});



var shouldContinue = true; // Global flag to control the processing

// Function to create a unique tooltip for each row
// Updated the tooltip so it does not clip off the screen
function createTooltip(element, text) {
  console.log("createTooltip called with text:", text);
  let tooltip = document.createElement('div');
  tooltip.className = 'custom-tooltip';
  tooltip.innerText = text;
  document.body.appendChild(tooltip);

  // Style the tooltip
  tooltip.style.position = 'absolute';
  tooltip.style.backgroundColor = 'white';
  tooltip.style.border = '1px solid black';
  tooltip.style.padding = '10px';
  tooltip.style.width = '800px';
  tooltip.style.height = '320px';
  tooltip.style.zIndex = '1000';
  tooltip.style.textAlign = 'center';
  tooltip.style.display = 'flex';
  tooltip.style.justifyContent = 'center';
  tooltip.style.alignItems = 'center';
  tooltip.style.overflow = 'auto';
  tooltip.style.visibility = 'hidden';

  // Position the tooltip
  const rect = element.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();

  const elementCenterX = rect.left + rect.width / 2;
  const tooltipLeft = elementCenterX - tooltipRect.width / 2;

  const elementBottomY = rect.bottom;
  let tooltipTop = elementBottomY + 10; // Initial position

  // Check if tooltip is going off the screen vertically
  if (tooltipTop + tooltipRect.height > window.innerHeight) {
    tooltipTop = window.innerHeight - tooltipRect.height - 10; // Adjust to fit within viewport
  }

  tooltip.style.left = `${tooltipLeft}px`;
  tooltip.style.top = `${tooltipTop}px`;

  // Show/hide the tooltip on row hover
  element.addEventListener('mouseenter', () => {
    tooltip.style.visibility = 'visible';
  });
  element.addEventListener('mouseleave', () => {
    tooltip.style.visibility = 'hidden';
  });

  return tooltip;
}

// Function to process a single row
var anti_tab_duplicator_url = "empty"; // Prevent opening of multiple tabs 
function handleRow(row) {
  return new Promise((resolve, reject) => {
      if (!row) {
          reject("Row not found");
          return;
      }
      row.setAttribute('style', 'background:yellow !important; background-color:yellow !important'); // Highlight the row
      const link = row.querySelector('a');
      const url = link ? link.href : null;

      if (url) {
			if (url != anti_tab_duplicator_url) { // Prevent opening of multiple tabs 
				  let tooltip = createTooltip(row, "Processing...");
				  chrome.runtime.sendMessage({ action: 'openNewTab', url: url });
					anti_tab_duplicator_url = url;
				  const messageListener = function(request, sender, sendResponse) {
					  if (request.action === 'updateTooltipText' && request.text) {
						  tooltip.innerText = request.text;
						  chrome.runtime.onMessage.removeListener(messageListener);
						  setTimeout(resolve, 500); // Resolve after a 0.5-second delay
					  }
				  };

				  chrome.runtime.onMessage.addListener(messageListener);
			}	
      } else {
          console.log("No URL found in row");
          resolve();
      }
  });
}

// Function to iterate over rows and process them
async function processRows() {
  const rows = document.querySelectorAll('tr[data-test-id="generic-table-row"], tr[data-garden-id="tables.row"]');
  for (const row of rows) {
      if (!shouldContinue) break; // Stop processing if the flag is false
      await handleRow(row);
  }
}

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'startHighlighting') {
      shouldContinue = true;
      processRows();
  } else if (request.action === 'stopProcessing') {
      shouldContinue = false;
  }
});
// Variable to keep track of the currently active tab index
let currentActiveTabIndex = 0;
let optionSelectionCounts = {};

function setupTabClickListeners() {
  const navTabs = document.querySelector('ul.nav.nav-tabs');
  if (navTabs) {
    console.log('Nav tabs are highlighted');

    const tabs = navTabs.querySelectorAll('li[role="presentation"]');
    tabs.forEach((tab, index) => {
      tab.setAttribute('data-tab-index', index); // Set data attribute for each tab

      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active')); // Remove 'active' from all tabs
        tab.classList.add('active'); // Add 'active' to the clicked tab
        currentActiveTabIndex = index; // Update the index of the current active tab

        console.log(`Active tab is highlighted: Tab Index - ${currentActiveTabIndex}`);
        countTipWrappElements(currentActiveTabIndex); // Count the .tip_wrapp elements for the current tab
      });
    });

    // Initial setup for the first active tab
    const initialActiveTab = navTabs.querySelector('li.active[role="presentation"]');
    if (initialActiveTab) {
      currentActiveTabIndex = Array.from(tabs).indexOf(initialActiveTab);
      console.log(`Initial active tab: Tab Index - ${currentActiveTabIndex}`);
      countTipWrappElements(currentActiveTabIndex);
    }
  }
  assignIndicesToAllTipWrappers(); // Assign indices to all tip wrappers on page load
}

function assignIndicesToAllTipWrappers() {
  const allTipWrappers = document.querySelectorAll('.col-md-6.tips_wrapper.border-left-grey:not([data-tip-wrapper-index])');
  allTipWrappers.forEach((wrapper, index) => {
    wrapper.setAttribute('data-tip-wrapper-index', index);
    console.log(`Assigned data-tip-wrapper-index: ${index} to element:`, wrapper);
  });
}

let addDecisionCount = 1; // Counter for the number of times 'Add Decision' button is clicked

function monitorNewTabCreation() {
    const addButton = document.querySelector('div.full-width .ladda-button.btn.btn-primary.add-decision-btn');

    if (addButton) {
        addButton.addEventListener('click', () => {
            console.log('Add Decision button clicked, a new tab might be created.');

            setTimeout(() => {
                assignIndexToNewTipWrapper(addDecisionCount);
                addDecisionCount++;
                setupTabClickListeners(); 
            }, 1000); // Adjust this delay based on how long it takes for the new tab to be rendered
        });
    }
}

function assignIndexToNewTipWrapper(tabIndex) {
    const newWrapper = document.querySelector('.col-md-6.tips_wrapper.border-left-grey:not([data-tip-wrapper-index])');
    if (newWrapper) {
        newWrapper.setAttribute('data-tip-wrapper-index', tabIndex);
        console.log(`Assigned data-tip-wrapper-index: ${tabIndex} to the new element.`);
    }
}


function setupTipWrapperIndices() {
  // Get all the tabs
  const tabs = document.querySelectorAll('ul.nav.nav-tabs li[role="presentation"]');

  tabs.forEach((tab, tabIndex) => {
    // Find the first .col-md-6.tips_wrapper.border-left-grey element for this tab
    // This assumes that each tab's corresponding .col-md-6.tips_wrapper.border-left-grey element
    // is located somewhere after the tab in the document order
    const tipWrapper = tab.closest('.nav').nextElementSibling.querySelector('.col-md-6.tips_wrapper.border-left-grey');

    if (tipWrapper && !tipWrapper.hasAttribute('data-tip-wrapper-index')) {
      // Assign the tabIndex as the data-tip-wrapper-index to this element
      tipWrapper.setAttribute('data-tip-wrapper-index', tabIndex);
      console.log(`Assigned data-tip-wrapper-index: ${tabIndex} to element:`, tipWrapper);
    }
  });
}



function highlightAndClickButton(tabIndex) {
  // Find the tip wrapper with the matching data-tip-wrapper-index attribute
  const tipWrapper = document.querySelector(`.col-md-6.tips_wrapper.border-left-grey[data-tip-wrapper-index="${tabIndex}"]`);

  if (tipWrapper) {
      // Get all the buttons within the matched tip wrapper
      const buttons = tipWrapper.querySelectorAll(".ladda-button.btn.btn-primary");

      // Loop through the buttons to find the 'Add Tip' button and click it
      let buttonFound = false;
      for (const button of buttons) {
          if (button.textContent.trim() === 'Add Tip') {
              button.click(); // Simulate click
              buttonFound = true;
              break; // Exit the loop after clicking the 'Add Tip' button
          }
      }

      if (buttonFound) {
          setTimeout(() => {
              selectDropdownOption('Your Option Value Here', tabIndex); // Pass the matched index
          }, 100); // Slight delay to allow for any UI updates
      }
  } else {
      console.log(`No '.col-md-6.tips_wrapper.border-left-grey' element found with index ${tabIndex}.`);
  }
}
function selectDropdownOption(optionValue, tabIndex) {
  // Count the existing .tip_wrapp elements for the given tabIndex
  const existingTipCount = countTipWrappElements(tabIndex);

  // The new tipIndex for the next element should be one less than the count of existing elements
  const tipIndex = existingTipCount - 1; // Subtract 1 from the count

  // Log the selected option with the current indices
  console.log(`Selecting option: tabIndex = ${tabIndex}, tipIndex = ${tipIndex}`);

  // Find and select the option in the dropdown for the next element
  const selectElement = document.querySelector(`select[name="decisions[${tabIndex}].original_medication.tips[${tipIndex}].type"]`);
  if (selectElement) {
      // Find the option that matches the optionValue
      const optionToSelect = Array.from(selectElement.options).find(option => option.text.trim() === optionValue.trim());
      if (optionToSelect) {
          optionToSelect.selected = true;
          triggerChangeEvent(selectElement);
          console.log(`Option selected: tabIndex = ${tabIndex}, tipIndex = ${tipIndex}`);
      }
  } else {
      console.log(`Select element not found for tabIndex = ${tabIndex}, tipIndex = ${tipIndex}`);
  }
}

////////////////////////////////// why does thi exist? when user click on the new decision and then select alt med, it messes all the index assignment
///////////////////////////////// this code creares random index assigning for the al med, which can be change to an exact index assignment in the future
//////////////////////////////// if you want to work with that field
function setupSelectListenerAltClick() {
  var selectElement = document.querySelector(`select[name="decisions[${currentActiveTabIndex}].another_option_type"]`);

  if (selectElement) {
      if (!selectElement.dataset.listenerAdded) {
          selectElement.dataset.listenerAdded = 'true';

          selectElement.addEventListener('change', function() {
              var selectedOptionText = selectElement.options[selectElement.selectedIndex].text;
              console.log(`Tab Index ${currentActiveTabIndex} - Selected option:`, selectedOptionText);

              // Wait for 2 seconds before assigning a random index
              setTimeout(assignRandomIndexToFirstUnindexedTipWrapper, 1000);
          });
      }
  } else {
      console.log(`Tab Index ${currentActiveTabIndex} - Select element not found`);
  }
}

function assignRandomIndexToFirstUnindexedTipWrapper() {
  // Find the first unindexed .col-md-6.tips_wrapper.border-left-grey element
  const unindexedTipWrapper = document.querySelector(`.col-md-6.tips_wrapper.border-left-grey:not([data-tip-wrapper-index])`);
  if (unindexedTipWrapper) {
      const randomIndex = Math.floor(Math.random() * 81) + 20; // Random number between 20 and 100
      unindexedTipWrapper.setAttribute('data-tip-wrapper-index', randomIndex);
      console.log(`Assigned random index ${randomIndex} to the first unindexed tip wrapper.`);
  }
}

setInterval(setupSelectListenerAltClick, 1000);


//////////////////////////////


function countTipWrappElements(tabIndex) {
  // Find the tip wrapper with the matching data-tip-wrapper-index attribute
  const tipWrapper = document.querySelector(`.col-md-6.tips_wrapper.border-left-grey[data-tip-wrapper-index="${tabIndex}"]`);

  if (tipWrapper) {
      // Query all .tip_wrapp elements within the tip wrapper
      const tipWrappElements = tipWrapper.querySelectorAll('.tip_wrapp');
      console.log(`Number of .tip_wrapp elements under the tip wrapper with index ${tabIndex}: ${tipWrappElements.length}`);
      return tipWrappElements.length;
  } else {
      console.log(`No '.col-md-6.tips_wrapper.border-left-grey' element found with index ${tabIndex}.`);
      return 0; // Return 0 if no tip wrapper is found
  }
}

function triggerChangeEvent(element) {
  const event = new Event('change', { 'bubbles': true, 'cancelable': true });
  element.dispatchEvent(event);
}

// Function to attach click listeners to 'Remove' buttons
function attachClickListenersToButtons() {
  const divElements = document.querySelectorAll('.col-md-6.tips_wrapper.border-left-grey');
  for (let div of divElements) {
    const removeButtons = Array.from(div.querySelectorAll('button.ladda-button.btn.btn-danger'))
                               .filter(button => button.textContent.trim() === 'Remove');
    removeButtons.forEach(button => {
      // Remove any existing event listeners before adding a new one
      button.removeEventListener('click', handleRemoveClick);
      button.addEventListener('click', handleRemoveClick);
    });
  }
}

// Separate function to handle the 'Remove' button click
function handleRemoveClick() {
  decrementSelectionCount(currentActiveTabIndex);
}

function decrementSelectionCount(tabIndex) {
  if (optionSelectionCounts[tabIndex] && optionSelectionCounts[tabIndex] > 0) {
    optionSelectionCounts[tabIndex]--;
    console.log(`Remove has been clicked for tab index ${tabIndex}`);
    console.log(`The current tipIndex is reset to ${optionSelectionCounts[tabIndex]}`);
  }
}

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
          attachClickListenersToButtons();
      }
  });
});

const config = { childList: true, subtree: true };
observer.observe(document.body, config);


setTimeout(() => {
  setupTabClickListeners();
  monitorNewTabCreation();
  attachClickListenersToButtons();
  setupTipWrapperIndices();
}, 4000);

// Listener for messages from the popup or other parts of the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "selectAndClick") {
    // Call highlightAndClickButton with the current active tab index
    highlightAndClickButton(currentActiveTabIndex);
    setTimeout(() => {
      // Make sure to pass the correct option value
      selectDropdownOption(message.optionValue, currentActiveTabIndex);
    }, 100);
  }
});
function createReplaceTable() {
  const targetElement = document.querySelector('table#tableRxSummary.tableRxSummaryCSS');
  if (!targetElement) return;

  let table = document.querySelector('#bestSavingTable');
  let isTableVisible = table ? table.style.display !== 'none' : false;

  const button = document.createElement('button');
  button.textContent = 'Replace Medications';
  // Styling the button
  button.style.backgroundImage = 'linear-gradient(lightgreen, green)';
  button.style.border = '1px solid darkgreen';
  button.style.borderRadius = '5px';
  button.style.color = 'white';
  button.style.padding = '6px 9px';
  button.style.margin = '5px 0';
  button.style.textTransform = 'uppercase';
  button.style.fontWeight = 'bold';
  button.style.cursor = 'pointer';
  button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

  button.addEventListener('click', () => {
      if (!table) {
          table = TableReplaceNames();
          table.setAttribute('id', 'bestSavingTable');
          targetElement.parentNode.insertBefore(table, targetElement.nextSibling);
      } else {
          isTableVisible = !isTableVisible;
          table.style.display = isTableVisible ? 'block' : 'none';
      }
  });

  button.setAttribute('id', 'bestSavingButton');
  targetElement.parentNode.insertBefore(button, targetElement.nextSibling);
}
setTimeout(() => { createReplaceTable(); }, 5000);

function TableReplaceNames() {
  const table = document.createElement('table');
  table.style.width = '100%';
  table.style.borderCollapse = 'collapse';

  const medicationNames = [
      'Quantity Limit', 'Generic Substitution', 'Step Therapy', 'Preferred Pharmacy',
      '', 
      'XXXX Formulary', 'Medication Clarification','', 'Over-the-counter', 'Specialty Medication',
      'Compound Pharmacy', 'Preventive Medication (confirmed $0)', 'Prior Authorization',
      'Common Dosage/Strength/Amount/Form', 'Preventive Medication (not confirmed price)',
      'Manufacturer Offer (not generated)', 'Home Delivery (Retail Refill Limitation)',
      'Coverage Details (Price advised by member higher)', 'Coverage Details (Price advised by member lower)','Excluded Medication',
      'Coverage Details (HDHP High-Volume)', 'Coverage Details (Copay High-Volume)'
  ];

  const placeholderNames = [
      '*DRUG*', '[MEDICATION NAME]', '*DRUG*', '[insert the name of med]', '[name]',
      '[MEDICATION NAME]', '*DRUG1*', '*DRUG2*','[MED NAME]', '[name]', '[NAME]', '[MED NAME]',
      '*DRUG*', '[MEDICATION NAME]', '[MED NAME]', '[Medication name]', '*DRUG*',
      '[MEDICATION NAME]', '[MEDICATION NAME]','[name]','[MEDICATION NAME]', '[MED NAME]'
  ];

  medicationNames.forEach((name, index) => {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);

      // First column (non-editable, with outline box)
      cell1.textContent = name;
      cell1.style.fontWeight = 'bold'; // Bold text
      cell1.style.border = '1px solid #000'; // Outline box for the first column
      cell1.style.padding = '5px';
      cell1.style.boxSizing = 'border-box'; // Include padding and border in the element's total width and height

      // Second column (input field with outline box)
      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('placeholder', placeholderNames[index]);
      input.style.border = '1px solid #000'; // Outline box for the input
      input.style.padding = '5px';
      input.style.boxSizing = 'border-box'; // Include padding and border in the element's total width and height
      cell2.appendChild(input);

      // Third column (Replace button)
      const replaceButton = document.createElement('button');
      replaceButton.textContent = 'Replace';
      replaceButton.style.cursor = 'pointer';
      replaceButton.addEventListener('click', () => {
          const placeholder = placeholderNames[index];
          const valueToReplace = input.value;
      
          // Log current state
          console.log(`Attempting to replace '${placeholder}' with '${valueToReplace}'`);
      
          // Only run the replacement on the currently active tab
          let i = currentActiveTabIndex;
          for (let j = 0; j <= 5; j++) {
              const textareaSelector = `textarea.form-control[name="decisions[${i}].original_medication.tips[${j}].body"]`;
              const textarea = document.querySelector(textareaSelector);
      
              if (textarea) {
                  const regex = new RegExp(escapeRegExp(placeholder), 'g');
                  
                  if (regex.test(textarea.value)) {
                      // Replace the placeholder in the textarea's value as if a user typed it
                      textarea.value = textarea.value.replace(regex, escapeHTML(valueToReplace));
                      // Trigger input event to simulate user typing
                      textarea.dispatchEvent(new Event('input', { bubbles: true }));
                      console.log(`Replaced '${placeholder}' with '${valueToReplace}' in the textarea: ${textareaSelector}`);
                  } else {
                      console.log(`Placeholder '${placeholder}' not found in the textarea: ${textareaSelector}`);
                  }
              } else {
                  console.log(`Textarea with selector '${textareaSelector}' not found.`);
              }
          }
      });
      
      cell3.appendChild(replaceButton);

      // Adjust cell widths to bring first and second columns closer and reduce their width
      cell1.style.width = '10%'; 
      cell2.style.width = '10%'; 
      cell3.style.width = '90%'; 
  });

  return table;
}

// Utility function to escape RegExp special characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

// Utility function to escape HTML special characters to prevent XSS
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
      tag => ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          "'": '&#39;',
          '"': '&quot;'
      }[tag] || tag));
}

// Initialize the table creation after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
  const replaceTable = TableReplaceNames();
  document.body.appendChild(replaceTable); // Append the table to the body or another element of your choice
});

function createButtonAndTable() {
  const targetElement = document.querySelector('table#tableRxSummary.tableRxSummaryCSS');
  if (!targetElement) return;

  let table = document.querySelector('#bestSavingTable');
  let isTableVisible = table ? table.style.display !== 'none' : false;

  const button = document.createElement('button');
  button.textContent = 'Savings Comparison';

  // Styling the button
  button.style.backgroundImage = 'linear-gradient(lightgreen, green)'; // Gradient from light green to green
  button.style.border = '1px solid darkgreen';
  button.style.borderRadius = '5px'; // Rounded corners
  button.style.color = 'white'; // White text color
  button.style.padding = '6px 9px'; // Padding for size
  button.style.margin = '5px 0'; // Margin for spacing
  button.style.textTransform = 'uppercase'; // Uppercase text
  button.style.fontWeight = 'bold'; // Bold font
  button.style.cursor = 'pointer'; // Pointer cursor on hover
  button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Shadow for 3D effect

  button.addEventListener('click', () => {
      if (!table) {
          table = createTable();
          table.setAttribute('id', 'bestSavingTable');
          targetElement.parentNode.insertBefore(table, button.nextSibling);
      } else {
          isTableVisible = !isTableVisible;
          table.style.display = isTableVisible ? 'table' : 'none';
      }
  });

  button.setAttribute('id', 'bestSavingButton');
  targetElement.parentNode.insertBefore(button, targetElement.nextSibling);
}

function createTable() {
  const table = document.createElement('table');
  table.style.border = '1px solid black';
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';

  // Header row creation with specified headers
  const headerRow = table.insertRow();
  const headers = [
    'Medication Name',
    'Input medication', // These will be editable
    'Input medication',
    'Input medication',
    'Input medication',
    'Input medication',
    'Input medication', // New columns
    'Input medication',
    'Input medication',
    'Input medication',
    'Input medication',
    'Total Cost'
  ];

  headers.forEach((headerText, index) => {
    const headerCell = document.createElement('th');
    headerCell.style.border = '1px solid black';
    headerCell.style.textAlign = 'center';
    headerCell.style.padding = '8px';
    headerCell.style.backgroundColor = '#f9f9f9';

    if (index === 0 || index === headers.length - 1) {
      headerCell.textContent = headerText;
      headerCell.style.width = `${100 / headers.length}%`;
    } else {
      const input = document.createElement('input');
      input.style.width = '100%';
      input.placeholder = headerText;
      input.style.border = 'none';
      input.style.textAlign = 'center';
      input.style.backgroundColor = 'transparent';
      input.oninput = function() { handleHeaderInput(this, table); };
      headerCell.appendChild(input);
    }
    
    headerRow.appendChild(headerCell);
  });

  // Creating the rest of the table rows
  for (let i = 0; i < 12; i++) { // Adjusted the number of rows
    const row = table.insertRow();
    for (let j = 0; j < headers.length; j++) { // Adjusted the number of columns
      const cell = row.insertCell();
      cell.style.border = '1px solid black';
      cell.style.textAlign = 'center';
      cell.style.padding = '8px';

      if (j === 0) {
        const input = document.createElement('input');
        input.style.width = '100%';
        input.placeholder = "Input Pharmacy";
        input.style.fontWeight = 'bold';
        input.style.fontSize = '110%';
        cell.appendChild(input);
      } else if (j === headers.length - 1) {
        const span = document.createElement('span');
        span.textContent = "$0.00";
        cell.appendChild(span);
      } else {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.style.width = '100%';
        input.placeholder = 'Input the price';
        input.oninput = function() { handleInput(this, table); };
        cell.appendChild(input);
      }
    }
  }

  return table;
}

function handleHeaderInput(inputElement, table) {
}


function handleInput(inputElement, table) {
  inputElement.value = inputElement.value.replace(/(?!^\$)[^\d]/g, '');
  if (!inputElement.value.startsWith('$') && inputElement.value !== '') {
    inputElement.value = `$${inputElement.value}`;
  }
  updateFinalCost(inputElement, table);
}

function updateFinalCost(inputElement, table) {
  const row = inputElement.closest('tr');
  const priceInputs = row.querySelectorAll('input[placeholder="Input the price"]');
  let sum = 0;
  priceInputs.forEach(input => {
    let value = input.value.replace('$', '');
    sum += value ? parseFloat(value) : 0;
  });

  const finalCostCell = row.cells[row.cells.length - 1];
  finalCostCell.firstChild.textContent = `$${sum.toFixed(2)}`;

  highlightHighestCostRow(table);
}

function highlightLowestCostRow(table) {
  let lowestValue = Infinity;
  let lowestRows = [];

  // Find the lowest non-zero value
  Array.from(table.rows).forEach(row => {
    const finalCostCell = row.cells[row.cells.length - 1];
    const valueStr = finalCostCell.firstChild.textContent.replace('$', '').trim();
    const value = parseFloat(valueStr);
    if (valueStr && value < lowestValue && value > 0) { // Exclude zero values
      lowestValue = value;
      lowestRows = [row];
    } else if (value === lowestValue) {
      lowestRows.push(row);
    }
  });

  // Reset the background for all rows
  Array.from(table.rows).forEach(row => {
    Array.from(row.cells).forEach(cell => cell.style.backgroundColor = 'transparent');
  });

  // Highlight all rows with the lowest non-zero value
  lowestRows.forEach(row => {
    Array.from(row.cells).forEach(cell => cell.style.backgroundColor = 'yellow');
  });
}

function updateFinalCost(inputElement, table) {
  const row = inputElement.closest('tr');
  const priceInputs = row.querySelectorAll('input[placeholder="Input the price"], input[placeholder="Input medication"]');
  let sum = 0;
  priceInputs.forEach(input => {
    let value = input.value.replace('$', '');
    sum += value ? parseFloat(value) : 0;
  });

  const finalCostCell = row.cells[row.cells.length - 1];
  finalCostCell.firstChild.textContent = `$${sum.toFixed(2)}`;

  highlightLowestCostRow(table); // Call the function to highlight the row with the lowest cost
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "addButton") {
      createButtonAndTable();
    }
  }
);

setTimeout(() => {
  createButtonAndTable();
}, 5000);

function calculateSavings(decisionNumber) {
  const originalPriceInput = document.querySelector(`input[name="decisions[${decisionNumber}].original_medication.original_price"]`);
  const newPriceInput = document.querySelector(`input[name="decisions[${decisionNumber}].original_medication.new_price"]`);
  const savingsInput = document.querySelector(`input[name="decisions[${decisionNumber}].original_medication.savings"]`);

  if (originalPriceInput && newPriceInput && savingsInput) {
    const originalPrice = originalPriceInput.value.trim(); // Get the trimmed value
    const newPrice = Math.round(parseFloat(newPriceInput.value) || 0);

    // Only calculate and update savings if originalPrice is not empty
    if (originalPrice !== '') {
      const savings = Math.round(parseFloat(originalPrice) - newPrice);
      savingsInput.value = savings >= 0 ? savings : ''; // Update only if there are savings
      triggerInputEvent(savingsInput);
    }
    // If originalPrice is empty, do not clear the savings input, allowing user input
  }
}

function calculateSimilarMedicationSavings(decisionNumber) {
  const originalNewPriceInput = document.querySelector(`input[name="decisions[${decisionNumber}].original_medication.new_price"]`);
  const similarNewPriceInput = document.querySelector(`input[name="decisions[${decisionNumber}].similar_medication.new_price"]`);
  const savingsInput = document.querySelector(`input[name="decisions[${decisionNumber}].similar_medication.savings"]`);

  if (originalNewPriceInput && similarNewPriceInput && savingsInput) {
      const originalNewPrice = Math.round(parseFloat(originalNewPriceInput.value) || 0);
      const similarNewPrice = Math.round(parseFloat(similarNewPriceInput.value) || 0);
      const savings = originalNewPrice - similarNewPrice;
      savingsInput.value = savings;
      triggerInputEvent(savingsInput);
  }
}

function triggerInputEvent(element) {
  const event = new Event('input', { bubbles: true, cancelable: true });
  element.dispatchEvent(event);
}

function calculateTotalHighestNewPrice() {
  let total = 0;
  for (let i = 0; i <= 5; i++) {
      const originalNewPriceInput = document.querySelector(`input[name="decisions[${i}].original_medication.new_price"]`);
      const similarNewPriceInput = document.querySelector(`input[name="decisions[${i}].similar_medication.new_price"]`);

      if (originalNewPriceInput && similarNewPriceInput) {
          const originalNewPrice = Math.round(parseFloat(originalNewPriceInput.value) || 0);
          const similarNewPrice = Math.round(parseFloat(similarNewPriceInput.value) || 0);
          total += Math.max(originalNewPrice, similarNewPrice);
      }
  }

  const summaryTextArea = document.querySelector('textarea#summary');
  if (summaryTextArea) {
      summaryTextArea.value = `Total Highest New Price: ${total}`;
      triggerInputEvent(summaryTextArea); // To simulate user input
  }
}

function handleActiveTab(decisionNumber) {
  const activeTab = document.querySelector('ul.nav.nav-tabs li[role="presentation"].active');

  if (activeTab) {
      calculateSavings(decisionNumber);
      calculateSimilarMedicationSavings(decisionNumber);
      calculateTotalHighestNewPrice();
  }
}

// Run the handleActiveTab function for the default tab (decision 0) after a delay of 2 seconds
setTimeout(() => handleActiveTab(0), 2000);

// Event listener for tab changes
document.body.addEventListener('click', (event) => {
  if (event.target.closest('ul.nav.nav-tabs li[role="presentation"]')) {
      setTimeout(() => handleActiveTab(1), 2000); // 2-second delay
  }
});

// Event delegation for original price and new price inputs
document.body.addEventListener('input', (event) => {
  for (let i = 0; i <= 5; i++) {
      if (event.target.matches(`input[name="decisions[${i}].original_medication.original_price"]`) || 
          event.target.matches(`input[name="decisions[${i}].original_medication.new_price"]`) ||
          event.target.matches(`input[name="decisions[${i}].similar_medication.new_price"]`)) {
          calculateSavings(i);
          calculateSimilarMedicationSavings(i);
          calculateTotalHighestNewPrice();
          break;
      }
  }
});

function calculateSimilarMedicationSavings(decisionNumber) {
  const originalPriceInput = document.querySelector(`input[name="decisions[${decisionNumber}].original_medication.original_price"]`);
  const originalSavingsInput = document.querySelector(`input[name="decisions[${decisionNumber}].original_medication.savings"]`);
  const originalNewPriceInput = document.querySelector(`input[name="decisions[${decisionNumber}].original_medication.new_price"]`);
  const similarNewPriceInput = document.querySelector(`input[name="decisions[${decisionNumber}].similar_medication.new_price"]`);
  const savingsInput = document.querySelector(`input[name="decisions[${decisionNumber}].similar_medication.savings"]`);
  const summaryTextArea = document.querySelector('textarea#summary');

  if (originalNewPriceInput && similarNewPriceInput && savingsInput) {
      const originalPrice = originalPriceInput ? originalPriceInput.value.trim() : '';
      const originalSavings = originalSavingsInput ? originalSavingsInput.value.trim() : '';
      const originalNewPrice = Math.round(parseFloat(originalNewPriceInput.value) || 0);
      const similarNewPrice = Math.round(parseFloat(similarNewPriceInput.value) || 0);
      const savings = originalNewPrice - similarNewPrice;
      savingsInput.value = savings;
      triggerInputEvent(savingsInput);

      // Check if original price and savings are empty, then update summary with similar new price
      if (originalPrice === '' && originalSavings === '' && summaryTextArea) {
          summaryTextArea.value = similarNewPrice;
          triggerInputEvent(summaryTextArea);
      }
  }
}

function updateSummaryIfOriginalPriceEmpty(decisionNumber) {
  const originalPriceInput = document.querySelector(`input[name="decisions[${decisionNumber}].original_medication.original_price"]`);
  const newPriceInput = document.querySelector(`input[name="decisions[${decisionNumber}].original_medication.new_price"]`);
  const summaryTextArea = document.querySelector('textarea#summary');

  if (originalPriceInput && newPriceInput && summaryTextArea) {
      const originalPrice = originalPriceInput.value.trim();
      const newPrice = newPriceInput.value.trim();

      // Check if original price is empty
      if (originalPrice === '') {
          summaryTextArea.value = newPrice;
          triggerInputEvent(summaryTextArea);
      }
  }
}

function compareValuesAndOutput() {
  let totalHighestPerInstance = 0;
  for (let i = 0; i <= 5; i++) {
      const similarMedicationNewPriceInput = document.querySelector(`input[name="decisions[${i}].similar_medication.new_price"]`);
      const originalMedicationSavingsInput = document.querySelector(`input[name="decisions[${i}].original_medication.savings"]`);

      let similarMedicationNewPrice = 0, originalMedicationSavings = 0;
      
      if (similarMedicationNewPriceInput) {
          similarMedicationNewPrice = parseFloat(similarMedicationNewPriceInput.value) || 0;
      }
      if (originalMedicationSavingsInput) {
          originalMedicationSavings = parseFloat(originalMedicationSavingsInput.value) || 0;
      }

      const highestPerInstance = Math.max(similarMedicationNewPrice, originalMedicationSavings);
      totalHighestPerInstance += highestPerInstance;
  }

  const summaryTextArea = document.querySelector('textarea#summary');
  if (summaryTextArea) {
      summaryTextArea.value = `${totalHighestPerInstance}`;
      triggerInputEvent(summaryTextArea); // To simulate user input
  }
}

function handleActiveTab(decisionNumber) {
  const activeTab = document.querySelector('ul.nav.nav-tabs li[role="presentation"].active');

  if (activeTab) {
      calculateSavings(decisionNumber);
      calculateSimilarMedicationSavings(decisionNumber);
      calculateTotalHighestNewPrice();
      compareValuesAndOutput(); 
  }
}

// Run the handleActiveTab function for the default tab (decision 0) after a delay of 2 seconds
setTimeout(() => handleActiveTab(0), 2000);

// Event listener for tab changes
document.body.addEventListener('click', (event) => {
  if (event.target.closest('ul.nav.nav-tabs li[role="presentation"]')) {
      setTimeout(() => handleActiveTab(1), 2000); // 2-second delay
  }
});

// Event delegation for original price and new price inputs
document.body.addEventListener('input', (event) => {
  for (let i = 0; i <= 5; i++) {
      if (event.target.matches(`input[name="decisions[${i}].original_medication.original_price"]`) || 
          event.target.matches(`input[name="decisions[${i}].original_medication.new_price"]`) ||
          event.target.matches(`input[name="decisions[${i}].similar_medication.new_price"]`)) {
          calculateSavings(i);
          calculateSimilarMedicationSavings(i);
          calculateTotalHighestNewPrice();
          compareValuesAndOutput(); 
          break;
      }
  }
});

function highlightInputFields() {
  const inputFields = document.querySelectorAll('input[data-garden-id="forms.input"]');
  const tourElement = document.querySelector('[data-simplified-get-started-tour-id="conversationPane"]');

  if (inputFields.length > 0) {
      console.log(`${inputFields.length} input field(s) found.`);
      let valuesToCopy = [];
      let tourIdValue = tourElement ? tourElement.getAttribute('data-simplified-get-started-tour-id') : null;

      inputFields.forEach((field, index) => {
          if ([1, 2, 3, 5, 6, 7].includes(index)) {
              valuesToCopy[index] = field.value;
              console.log(`Value for input field ${index} stored: ${field.value}`);
          }
      });

      chrome.storage.local.set({ valuesToCopy: valuesToCopy, tourIdValue: tourIdValue }, () => {
          console.log('Values and tour ID are updated in chrome.storage');
      });

  } else {
      console.log('No input fields found.');
  }
}


function insertPasteTextButtonOnPage() {
  let searchInterval = setInterval(function() {
      // Select all buttons with the specified classes
      const buttons = document.querySelectorAll('button.ladda-button.btn.btn-primary.btn-danger');

      // Find the specific button with the text "Remove Current Bill Review Tab"
      let targetButton = Array.from(buttons).find(button => button.textContent.trim() === 'Remove Current Bill Review Tab');

      if (targetButton) {
          clearInterval(searchInterval); // Stop the search once the button is found

          // Create the "Paste Text" button
          const pasteTextButton = document.createElement('button');
          pasteTextButton.textContent = 'Paste Text';
          pasteTextButton.id = 'pasteTextButton';

          // Styling the button
          pasteTextButton.style.backgroundColor = '#a4508b'; // Base color
          pasteTextButton.style.color = 'white'; // Text color
          pasteTextButton.style.border = '1px solid #5f0a87';
          pasteTextButton.style.padding = '10px 20px';
          pasteTextButton.style.borderRadius = '5px';
          pasteTextButton.style.cursor = 'pointer';
          pasteTextButton.style.backgroundImage = 'linear-gradient(to bottom, #b76eb8, #a4508b, #5f0a87)'; // Gradient
          pasteTextButton.style.boxShadow = '0 4px #5f0a87'; // Shadow for 3D effect
          pasteTextButton.style.transition = 'transform 0.1s, box-shadow 0.1s';
          pasteTextButton.style.position = 'relative';
          pasteTextButton.style.left = '5%'; // Move 20% to the right
          pasteTextButton.style.transform = 'scaleX(0.9)';
          

          // Button hover and active states for more 3D effect
          pasteTextButton.addEventListener('mouseover', () => {
              pasteTextButton.style.transform = 'scale(1.1)';
              pasteTextButton.style.boxShadow = '0 6px #5f0a87';
          });

          pasteTextButton.addEventListener('mouseout', () => {
              pasteTextButton.style.transform = 'scale(0.9)';
              pasteTextButton.style.boxShadow = '0 4px #5f0a87';
          });

          pasteTextButton.addEventListener('mousedown', () => {
              pasteTextButton.style.transform = 'scale(0.95)';
              pasteTextButton.style.boxShadow = '0 2px #5f0a87';
          });

          pasteTextButton.addEventListener('mouseup', () => {
              pasteTextButton.style.transform = 'scale(1.05)';
              pasteTextButton.style.boxShadow = '0 6px #5f0a87';
          });

          pasteTextButton.addEventListener('click', function(event) {
              // Prevent any default action and stop propagation
              event.preventDefault();
              event.stopPropagation();

              chrome.storage.local.get(['valuesToCopy'], (result) => {
                  if (result.valuesToCopy && result.valuesToCopy.length > 0) {
                      distributeStoredValues(result.valuesToCopy);
                  } else {
                      console.log('No values found in storage to paste');
                  }
              });
          });

          // Insert the Paste Text button after the target button
          targetButton.insertAdjacentElement('afterend', pasteTextButton);
      }
  }, 1000); // Check every 1 second (1000 milliseconds)
}

insertPasteTextButtonOnPage();






function distributeStoredValues(valuesToCopy, storedTourId) {
  // Get the current page's data-simplified-get-started-tour-id value
  const currentTourId = document.querySelector('[data-simplified-get-started-tour-id="conversationPane"]')?.getAttribute('data-simplified-get-started-tour-id');

  // Check if the stored tour ID matches the current page's tour ID
  if (storedTourId !== currentTourId) {
      console.log('The stored values do not match the current page tour ID.');
      return;
  }

  console.log('valuesToCopy:', valuesToCopy);
  if (valuesToCopy) {
      // Set values for each input/textarea field based on the stored values
      setInputValue('input[name="decisions[0].statement_review_title"]', valuesToCopy[1]);
      setInputValue('input[name="decisions[0].patient"]', valuesToCopy[2]);
      setInputValue('input[name="decisions[0].provider"]', valuesToCopy[3]);
      setInputValue('input[name="decisions[0].billed_amount"]', valuesToCopy[7]);
      setInputValue('input[name="decisions[0].total_charge"]', valuesToCopy[6]);
      setInputValue('textarea[name="decisions[0].intro"]', "You have received a thorough response to your Bill Review request! Your response has been delivered to your email address (email). Thank you");
  } else {
      console.log('valuesToCopy is undefined or not an array');
  }
}

function setInputValue(selector, value) {
  console.log(`Attempting to set value for ${selector}:`, value);
  const inputField = document.querySelector(selector);
  if (inputField && value !== undefined) {
      inputField.value = value;
      // Dispatch events for change, input, and blur to simulate user actions
      inputField.dispatchEvent(new Event('change', { bubbles: true }));
      inputField.dispatchEvent(new Event('input', { bubbles: true }));
      inputField.dispatchEvent(new Event('blur'));
      console.log(`Value set for ${selector}: ${value}`);
  } else {
      console.log(`Value is undefined or field not found for selector: ${selector}`);
  }
}



chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "highlightInputs") {
      highlightInputFields();
  } else if (message.action === "pasteTextClicked") {
      // Retrieve the stored values from chrome.storage.local
      chrome.storage.local.get(['valuesToCopy'], (result) => {
          if (result.valuesToCopy && result.valuesToCopy.length > 0) {
              distributeStoredValues(result.valuesToCopy);
          } else {
              console.log('No values found in storage to paste');
          }
      });
  }
});
