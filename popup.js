document.addEventListener("DOMContentLoaded", function () {
  // Check saved state for right click and change button name accordingly
  chrome.storage.local.get(['right_click_enabled_ZD_ext'], function(result) {
    if (result.right_click_enabled_ZD_ext != "disabled" || result.right_click_enabled_ZD_ext == null || result.right_click_enabled_ZD_ext == undefined) {
      document.getElementById('right_click_toggle').innerText = 'Right Click Enabled';
      } else { document.getElementById('right_click_toggle').innerText = 'Right Click Disabled'; }
  });

  // Check the current active tab's URL
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];
    const url = new URL(activeTab.url);

    if (url.hostname === "crm.healthjoy.com" && url.pathname.startsWith("/decision_center/")) {

      // Existing checkboxes for /decision_center/
      const checkboxes = {
        proximity: document.getElementById("proximityCheckbox"),
        inNetwork: document.getElementById("inNetworkCheckbox"),
        nearestAvailable: document.getElementById("nearestAvailableCheckbox"),
        inHouseLab: document.getElementById("inHouseLabCheckbox"),
        patientRatings: document.getElementById("patientRatingsCheckbox"),
        yearsInPractice: document.getElementById("yearsInPracticeCheckbox"),
        onlineScheduling: document.getElementById("onlineSchedulingCheckbox"),
        weekendEveningHours: document.getElementById("weekendEveningHoursCheckbox"),
        boardCertified: document.getElementById("boardCertifiedCheckbox"),
      };

      Object.values(checkboxes).forEach((checkbox) => checkbox.addEventListener("change", handleCheckboxChange));
      const availabilityDropdown = document.getElementById("availabilityDropdown"); // Replace "availabilityDropdown" with the actual ID of your dropdown element

      if (availabilityDropdown) {
        availabilityDropdown.addEventListener("change", handleDropdownChange);
      }

      function handleDropdownChange() {
        const selectedOption = availabilityDropdown.options[availabilityDropdown.selectedIndex].text;
        updateTextarea([selectedOption], 'decisions[0].why_recommend');
      }

      function handleCheckboxChange() {
        const selectedOptions = [];

        Object.entries(checkboxes).forEach(([key, checkbox]) => {
          if (checkbox.checked) {
            selectedOptions.push(checkboxLabels[key]);
          }
        });

        updateTextarea(selectedOptions, 'decisions[0].why_recommend');
      }

      // Checkbox labels for /decision_center/
      const checkboxLabels = {
        proximity: "Proximity",
        inNetwork: "In-network",
        nearestAvailable: "Nearest available option",
        inHouseLab: "In-house lab",
        patientRatings: "High-patient ratings",
        yearsInPractice: "10+ years in practice",
        onlineScheduling: "Online scheduling",
        weekendEveningHours: "Weekend/Evening hours",
        boardCertified: "Board-Certified",
      };

      // Function to update textarea for /decision_center/
      function updateTextarea(options, dataTestId) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          const activeTab = tabs[0];
          chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            function: (options, dataTestId) => {
              var textarea = document.querySelector(`textarea[name="${dataTestId}"]`);
              if (textarea) {
                var currentValue = textarea.value;
                var updatedValue = currentValue.split('\n').filter(option => !options.includes(option)).join('\n');
                textarea.value = updatedValue + (updatedValue ? '\n' : '') + options.join('\n');
      
                // Create and dispatch an 'input' event to simulate user interaction
                var event = new Event('input', {
                  bubbles: true,
                  cancelable: true,
                });
                textarea.dispatchEvent(event);
              }
            },
            args: [options, dataTestId],
          });
        });
      }
      

      // New checkboxes for /decision_center/
      const newCheckboxes = {
        labDisc: document.getElementById("labDiscCheckbox"),
        hoursVary: document.getElementById("hoursVaryCheckbox"),
        noTPS: document.getElementById("noTPSCheckbox"),
      };

      Object.values(newCheckboxes).forEach((checkbox) => checkbox.addEventListener("change", handleNewCheckboxChange));

      function handleNewCheckboxChange() {
        const selectedOptions = [];

        if (newCheckboxes.noTPS.checked) {
          selectedOptions.push("This provider does not support third-party scheduling and HealthJoy team will not be able to book a visit on your behalf. Please call the office directly in order to make an appointment.\n");
        }

        if (newCheckboxes.hoursVary.checked) {
          selectedOptions.push("Please note that the working hours of the provider may vary. \n");
        }

        if (newCheckboxes.labDisc.checked) {
          selectedOptions.push("HealthJoy team recommends you to always ask the office which laboratory location will be used beforehand and confirm that your insurance plan is accepted at that location. You may be overcharged by using out-of-network laboratory location. \n");
        }

        updateProviderNotes(selectedOptions, 'decisions[0].provider_notes');
      }

      // Function to update provider notes textarea for new checkboxes in /decision_center/
      function updateProviderNotes(options, dataTestId) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          const activeTab = tabs[0];
          chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            function: (options, dataTestId) => {
              const textareaElement = document.querySelector(`textarea[name="${dataTestId}"]`);
              if (textareaElement) {
                textareaElement.value = options.join('\n');

                // Create and dispatch an 'input' event to simulate user interaction
                var event = new Event('input', {
                  bubbles: true,
                  cancelable: true,
                });
                textareaElement.dispatchEvent(event);
              }
            },
            args: [options, dataTestId],
          });
        });
      }
    }
    document.getElementById("highlightButton").addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: highlightFields,
        });
      });
    });

    
      if (url.hostname === "crm.healthjoy.com" && url.pathname.startsWith("/v2/decision_center/")) {
        
        // Existing checkboxes for /decision_center/
        const checkboxes = {
          inHouseLab: document.getElementById("inHouseLabCheckbox"),
          patientRatings: document.getElementById("patientRatingsCheckbox"),
          yearsInPractice: document.getElementById("yearsInPracticeCheckbox"),
          onlineScheduling: document.getElementById("onlineSchedulingCheckbox"),
          weekendEveningHours: document.getElementById("weekendEveningHoursCheckbox"),
          boardCertified: document.getElementById("boardCertifiedCheckbox"),
        };
      
        const availabilityCheckboxes = {
          proximity: document.getElementById("proximityCheckbox"),
          inNetwork: document.getElementById("inNetworkCheckbox"),
          nearestAvailable: document.getElementById("nearestAvailableCheckbox"),
        };
      
        Object.values(checkboxes).forEach((checkbox) => {
          checkbox.addEventListener("change", handleCheckboxChange);
        });
      
        Object.values(availabilityCheckboxes).forEach((checkbox) => {
          checkbox.addEventListener("change", handleAvailabilityCheckboxChange);
        });
      
        const availabilityDropdown = document.getElementById("availabilityDropdown");
      
        if (availabilityDropdown) {
          availabilityDropdown.addEventListener("change", handleDropdownChange);
        }
      
        const checkboxLabels = {
          inHouseLab: "In-house lab",
          patientRatings: "High-patient ratings",
          yearsInPractice: "10+ years in practice",
          onlineScheduling: "Online scheduling",
          weekendEveningHours: "Weekend/Evening hours",
          boardCertified: "Board-Certified",
        };
      
        const checkboxLabelsAvailability = {
          proximity: "Proximity",
          inNetwork: "In-network",
          nearestAvailable: "Nearest available option",
        };
      
        function handleCheckboxChange() {
          const selectedOptions = [];
      
          Object.entries(checkboxes).forEach(([key, checkbox]) => {
            if (checkbox.checked) {
              selectedOptions.push(checkboxLabels[key]);
            }
          });
      
          updateTextarea(selectedOptions, 'decisions[0].details.provider_highlight');
        }
      
        function handleAvailabilityCheckboxChange() {
          const selectedOptions = [];
      
          Object.entries(availabilityCheckboxes).forEach(([key, checkbox]) => {
            if (checkbox.checked) {
              selectedOptions.push(checkboxLabelsAvailability[key]);
            }
          });
      
          updateTextarea(selectedOptions, 'decisions[0].details.why_recommend');
        }
      
        function handleDropdownChange() {
          const selectedOption = availabilityDropdown.options[availabilityDropdown.selectedIndex].text;
          updateTextarea([selectedOption], 'decisions[0].details.why_recommend');
        }
      
        function updateTextarea(options, dataTestId) {
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const activeTab = tabs[0];
            chrome.scripting.executeScript({
              target: { tabId: activeTab.id },
              function: pasteToTextarea,
              args: [options, dataTestId],
            });
          });
        }
      
        // The function to be injected and executed in the context of the web page.
        function pasteToTextarea(options, dataTestId) {
          var textarea = document.querySelector(`textarea[name="${dataTestId}"]`);
          if (textarea) {
            var currentValue = textarea.value;
            var updatedValue = currentValue.split('\n').filter(option => !options.includes(option)).join('\n');
            textarea.value = updatedValue + (updatedValue ? '\n' : '') + options.join('\n');
      
            // Create and dispatch an 'input' event to simulate user interaction
            var event = new Event('input', {
              bubbles: true,
              cancelable: true,
            });
            textarea.dispatchEvent(event);
          }
        }
      
      
        // New checkboxes for /decision_center/v2/
        const newCheckboxes = {
          labDisc: document.getElementById("labDiscCheckbox"),
          hoursVary: document.getElementById("hoursVaryCheckbox"),
          noTPS: document.getElementById("noTPSCheckbox"),
        };
      
        Object.values(newCheckboxes).forEach((checkbox) => {
          checkbox.addEventListener("change", handleNewCheckboxChange);
        });
      
        function handleNewCheckboxChange() {
          const selectedOptions = [];
      
          if (newCheckboxes.noTPS.checked) {
            selectedOptions.push("This provider does not support third-party scheduling and HealthJoy team will not be able to book a visit on your behalf. Please call the office directly in order to make an appointment.\n");
          }
      
          if (newCheckboxes.hoursVary.checked) {
            selectedOptions.push("Please note that the working hours of the provider may vary. \n");
          }
      
          if (newCheckboxes.labDisc.checked) {
            selectedOptions.push("HealthJoy team recommends you to always ask the office which laboratory location will be used beforehand and confirm that your insurance plan is accepted at that location. You may be overcharged by using out-of-network laboratory location. \n");
          }
      
          updateProviderNotes(selectedOptions, 'decisions[0].details.description');
        }
      
        // Function to update provider notes textarea for new checkboxes in /decision_center/v2/
        function updateProviderNotes(options, dataTestId) {
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const activeTab = tabs[0];
            chrome.scripting.executeScript({
              target: { tabId: activeTab.id },
              function: (options, dataTestId) => {
                const textareaElement = document.querySelector(`textarea[name="${dataTestId}"]`);
                if (textareaElement) {
                  textareaElement.value = options.join('\n');
      
                  // Create and dispatch an 'input' event to simulate user interaction
                  var event = new Event('input', {
                    bubbles: true,
                    cancelable: true,
                  });
                  textareaElement.dispatchEvent(event);
                }
              },
              args: [options, dataTestId],
            });
          });
        }
      }


    });
  });


  const pcpCheckbox = document.getElementById("pcpCheckbox");

pcpCheckbox.addEventListener("change", function () {
  if (pcpCheckbox.checked) {
    // Send a message to the content script to trigger the sliding page
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: () => {
          const slidingButton = document.querySelector('[ng-click="toggleRightPanel()"]');
          if (slidingButton) {
            slidingButton.click(); // Simulate a click event on the button
          }

          // Simulate a click on the "Insurance" tab
          const insuranceTab = document.querySelector('[ng-click="selectTab(\'insurance\')"]');
          if (insuranceTab) {
            insuranceTab.click();

            // Scroll to the "Provider (Doctor) Visits" element
            setTimeout(() => {
              // Find the <div class="profile-info-tab-content insurance">
              const insuranceContent = document.querySelector('div.profile-info-tab-content.insurance');
              if (insuranceContent) {
                // Find all "Show" buttons under the insurance content
                const showButtons = insuranceContent.querySelectorAll('a[ng-click="toggleCategory(categoryParams.category)"]');
                if (showButtons) {
                  showButtons.forEach((button) => {
                    button.click();
                  });

                  // Wait for the content to load (you can adjust the delay as needed)
                  setTimeout(() => {
                    // Find the text "Primary Care Physician (PCP) Visit to Treat a Problem"
                    const textToHighlight = "Primary Care Physician (PCP) Visit to Treat a Problem";
                    const ngBindingDivs = insuranceContent.querySelectorAll('div.ng-binding');
                    let highlightNextPrice = false;
                    let officeVisitText = "";

                    // Iterate through the divs
                    ngBindingDivs.forEach((div) => {
                      if (highlightNextPrice) {
                        // Highlight the next <div class="benefits-i-group-i-price ng-binding">
                        const nextPriceDiv = div;
                        if (nextPriceDiv && nextPriceDiv.classList.contains('benefits-i-group-i-price')) {
                          nextPriceDiv.style.backgroundColor = "yellow";
                          highlightNextPrice = false;

                          // Store the text in the officeVisitText variable
                          officeVisitText = nextPriceDiv.innerText;
                        }
                      }

                      if (div.innerText.includes(textToHighlight)) {
                        highlightNextPrice = true;
                      }
                    });

                    // Output the highlighted text to the "office_visit" field with a delay
                    const officeVisitFieldSelector = 'input[name="decisions[0].office_visit"]';
                    let officeVisitField = document.querySelector(officeVisitFieldSelector);

                    // Check if the field is not found
                    if (!officeVisitField) {
                      // Define a new const with a different selector
                      const officeVisitFieldAlternativeSelector = 'input[name="decisions[0].details.office_visit"]';
                      officeVisitField = document.querySelector(officeVisitFieldAlternativeSelector);
                    }

                    // Proceed with the rest of the code, now using officeVisitField which may refer to either of the two selectors
                    if (officeVisitField) {
                      officeVisitField.value = officeVisitText;
                      officeVisitField.setAttribute("autocomplete", "off"); // Prevent autofill
                      const event = new Event('input', { bubbles: true });
                      officeVisitField.dispatchEvent(event); // Trigger a change event

                      // Find the text "Preventive Care and Screenings"
                      const preventiveCareTextToHighlight = "Preventive Care and Screenings";
                      let highlightPreventiveCarePrice = false;
                      let preventiveCareText = "";

                      // Iterate through the divs
                      ngBindingDivs.forEach((div) => {
                        if (highlightPreventiveCarePrice) {
                          // Highlight the next <div class="benefits-i-group-i-price ng-binding">
                          const nextPriceDiv = div;
                          if (nextPriceDiv && nextPriceDiv.classList.contains('benefits-i-group-i-price')) {
                            nextPriceDiv.style.backgroundColor = "yellow";
                            highlightPreventiveCarePrice = false;

                            // Store the text in the preventiveCareText variable
                            preventiveCareText = nextPriceDiv.innerText;
                          }
                        }

                        if (div.innerText.includes(preventiveCareTextToHighlight)) {
                          highlightPreventiveCarePrice = true;
                        }
                      });

                      // Output the highlighted text to the "preventive_care" field with a delay
                      const preventiveCareFieldSelector = 'input[name="decisions[0].preventive_visit"]';
                      let preventiveCareField = document.querySelector(preventiveCareFieldSelector);

                      // Check if the field is not found
                      if (!preventiveCareField) {
                        // Define a new const with a different selector
                        const preventiveCareFieldAlternativeSelector = 'input[name="decisions[0].details.preventive_visit"]';
                        preventiveCareField = document.querySelector(preventiveCareFieldAlternativeSelector);
                      }

                      // Proceed with the rest of the code, now using preventiveCareField which may refer to either of the two selectors
                      if (preventiveCareField) {
                        preventiveCareField.value = preventiveCareText;
                        preventiveCareField.setAttribute("autocomplete", "off"); // Prevent autofill
                        const eventPreventive = new Event('input', { bubbles: true });
                        preventiveCareField.dispatchEvent(eventPreventive); // Trigger a change event

                      // Add the logic for "insurance_requires" field
                      const insuranceRequiresText = "Not all services fall under preventive care. Please consult with your provider on how the services will be billed to your insurance to avoid surprise bills.\nYour first visit may or may not be considered preventive, based on what services will be provided and how they will be billed to the insurance. If you schedule a preventive visit and ask your doctor about a specific health concern or condition, they may bill the appointment as an office visit.";
                      const insuranceRequiresFieldSelector = 'textarea[name="decisions[0].insurance_requires"]';
                      let insuranceRequiresField = document.querySelector(insuranceRequiresFieldSelector);

                      // Check if the field is not found
                      if (!insuranceRequiresField) {
                        // Define a new const with a different selector
                        const insuranceRequiresFieldAlternativeSelector = 'textarea[name="decisions[0].details.insurance_notes"]';
                        insuranceRequiresField = document.querySelector(insuranceRequiresFieldAlternativeSelector);
                      }

                      // Proceed with the rest of the code, now using insuranceRequiresField which may refer to either of the two selectors
                      if (insuranceRequiresField) {
                        insuranceRequiresField.value = insuranceRequiresText;
                        insuranceRequiresField.setAttribute("autocomplete", "off"); // Prevent autofill
                        const eventInsurance = new Event('input', { bubbles: true });
                        insuranceRequiresField.dispatchEvent(eventInsurance); // Trigger a change event
                      }  
                      }
                    }
                  }, 1000); // Adjust the delay as needed
                }
              }
            }, 1000); // Adjust the delay as needed
          }
        },
      });
    });
  }
});

const specialistCheckbox = document.getElementById("specialistCheckbox");

specialistCheckbox.addEventListener("change", function () {
  if (specialistCheckbox.checked) {
    // Send a message to the content script to trigger the sliding page
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: () => {
          const slidingButton = document.querySelector('[ng-click="toggleRightPanel()"]');
          if (slidingButton) {
            slidingButton.click(); // Simulate a click event on the button
          }

          // Simulate a click on the "Insurance" tab
          const insuranceTab = document.querySelector('[ng-click="selectTab(\'insurance\')"]');
          if (insuranceTab) {
            insuranceTab.click();

            // Scroll to the "Specialist Visit" element
            setTimeout(() => {
              // Find the <div class="profile-info-tab-content insurance">
              const insuranceContent = document.querySelector('div.profile-info-tab-content.insurance');
              if (insuranceContent) {
                // Find all "Show" buttons under the insurance content
                const showButtons = insuranceContent.querySelectorAll('a[ng-click="toggleCategory(categoryParams.category)"]');
                if (showButtons) {
                  showButtons.forEach((button) => {
                    button.click();
                  });

                  // Wait for the content to load (you can adjust the delay as needed)
                  setTimeout(() => {
                    // Find the text "Specialist Visit"
                    const textToHighlight = "Specialist Visit";
                    const ngBindingDivs = insuranceContent.querySelectorAll('div.ng-binding');
                    let highlightNextPrice = false;
                    let specialistVisitText = "";

                    // Iterate through the divs
                    ngBindingDivs.forEach((div) => {
                      if (highlightNextPrice) {
                        // Highlight the next <div class="benefits-i-group-i-price ng-binding">
                        const nextPriceDiv = div;
                        if (nextPriceDiv && nextPriceDiv.classList.contains('benefits-i-group-i-price')) {
                          nextPriceDiv.style.backgroundColor = "yellow";
                          highlightNextPrice = false;

                          // Store the text in the specialistVisitText variable
                          specialistVisitText = nextPriceDiv.innerText;
                        }
                      }

                      if (div.innerText.includes(textToHighlight)) {
                        highlightNextPrice = true;
                      }
                    });

                    // Output the highlighted text to the "specialist_visit" field with a delay
                    const specialistVisitFieldSelector = 'input[name="decisions[0].office_visit"]';
                    let specialistVisitField = document.querySelector(specialistVisitFieldSelector);

                    // Check if the field is not found
                    if (!specialistVisitField) {
                      // Define a new const with a different selector
                      const specialistVisitFieldAlternativeSelector = 'input[name="decisions[0].details.office_visit"]';
                      specialistVisitField = document.querySelector(specialistVisitFieldAlternativeSelector);
                    }

                    // Proceed with the rest of the code, now using specialistVisitField which may refer to either of the two selectors
                    if (specialistVisitField) {
                      specialistVisitField.value = specialistVisitText;
                      specialistVisitField.setAttribute("autocomplete", "off"); // Prevent autofill
                      const event = new Event('input', { bubbles: true });
                      specialistVisitField.dispatchEvent(event); // Trigger a change event
                    }
                  }, 1000); // Adjust the delay as needed
                }
              }
            }, 1000); // Adjust the delay as needed
          }
        },
      });
    });
  }
});

function highlightFields() {
        let selectors = [
          'input[name="header"]',
        'input[name="decisions[0].provider.provider_name"]',
        'input[name="decisions[0].provider.residency_training"]',
        'input[name="decisions[0].provider.age"]',
        'input[name="decisions[0].provider.medical_school"]',
        'input[name="decisions[0].provider.board_certification"]',
        'input[name="decisions[0].provider.offices[0].website_url"]',
        'input[name="decisions[0].provider.website_url"]',
        'input[name="decisions[0].provider.offices[0].office_name"]',
        'input[name="decisions[0].provider.offices[0].phone_number"]',
        'input[name="decisions[0].provider.offices[0].address_line"]',
        'input[name="decisions[0].provider.offices[0].address_details"]',
        'input[name="decisions[0].provider.offices[0].monday_hours"]',
        'input[name="decisions[0].provider.offices[0].tuesday_hours"]',
        'input[name="decisions[0].provider.offices[0].wednesday_hours"]',
        'input[name="decisions[0].provider.offices[0].thursday_hours"]',
        'input[name="decisions[0].provider.offices[0].friday_hours"]',
        'input[name="decisions[0].provider.offices[0].saturday_hours"]',
        'input[name="decisions[0].provider.offices[0].sunday_hours"]',
        ];
      
        let found = false; // Declare 'found' in the function scope
      
        for (const selector of selectors) {
          const elements = document.querySelectorAll(selector);
          if (elements.length > 0) {
            found = true;
            for (const element of elements) {
              const text = element.value;
              if (/^\s+/.test(text)) {
                element.style.backgroundColor = 'red';
              } else {
                element.style.backgroundColor = '';
              }
            }
          }
        }
      
        // Check if no fields were found in the initial selectors
        if (!found) {
          selectors = [
            'input[name="resolution.title"]',
        'input[name="display_name"]',
        'input[name="traits.medical_school"]',
        'input[name="traits.residency_training"]',
        'input[name="website_url"]',
        'input[name="offices[0].name"]',
        'input[name="offices[0].website_url"]',
          ];
      
          for (const selector of selectors) {
            const elements = document.querySelectorAll(selector);
            for (const element of elements) {
              const text = element.value;
              if (/^\s+/.test(text)) {
                element.style.backgroundColor = 'red';
              } else {
                element.style.backgroundColor = '';
              }
            }
          }
        }
      }
      
      highlightFields(); // Call the function
      

    

      let isContentScriptInjected = false;

      function injectContentScriptAndSendMessage(message) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (!isContentScriptInjected) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    files: ['content.js']
                }, () => {
                    // Script injected, send the message
                    chrome.tabs.sendMessage(tabs[0].id, message);
                    isContentScriptInjected = true;
                });
            } else {
                // Content script already injected, just send the message
                chrome.tabs.sendMessage(tabs[0].id, message);
            }
        });
      }
      
      document.getElementById('highlight').addEventListener('click', () => {
        injectContentScriptAndSendMessage({action: "startHighlighting"});
      });
      
      // Add event listener for the 'Stop' button
      document.getElementById('stop').addEventListener('click', () => {
        injectContentScriptAndSendMessage({action: "stopProcessing"});
      });

      // Add event listener for the 'right_click_toggle' button (toggle RClick on/off)
      document.getElementById('right_click_toggle').addEventListener('click', () => {
        chrome.storage.local.get(['right_click_enabled_ZD_ext'], function(result) {
          if (result.right_click_enabled_ZD_ext != "disabled") {
            document.getElementById('right_click_toggle').innerText = 'Right Click will be disabled after page refresh';
            chrome.storage.local.set({"right_click_enabled_ZD_ext": "disabled"});
          } else { 
            chrome.storage.local.set({"right_click_enabled_ZD_ext": "enabled"}); document.getElementById('right_click_toggle').innerText = 'Right Click will be enabled after page refresh'; 
            }
        });
      });
      
      document.addEventListener('DOMContentLoaded', function() {
        var tabs = document.querySelectorAll('.tab');
        var hccCheckbox = document.getElementById('hcc-checkbox');
        var rxCheckbox = document.getElementById('rx-checkbox');
        var brCheckbox = document.getElementById('br-checkbox'); // Added bill review checkbox
      
        // Load saved state and apply
        chrome.storage.sync.get(['defaultTab'], function(result) {
          if (result.defaultTab) {
            var savedCheckboxId = result.defaultTab + '-checkbox';
            var savedCheckbox = document.getElementById(savedCheckboxId);
            if (savedCheckbox) {
              savedCheckbox.checked = true;
              toggleCheckbox(savedCheckbox, true);
              document.querySelector('.tab[data-target="' + result.defaultTab + '-content"]').click();
            } else {
              console.error('Saved checkbox ID not found in the document:', savedCheckboxId);
              // Fallback to default tab
              tabs[0].click();
            }
          } else {
            // If no saved state, default to first tab
            tabs[0].click();
          }
        });
      
        // Tab click event
        tabs.forEach(function(tab) {
          tab.addEventListener('click', function() {
            var target = this.getAttribute('data-target');
      
            tabs.forEach(function(tab) {
              tab.classList.remove('active-tab');
              document.getElementById(tab.getAttribute('data-target')).classList.remove('active');
            });
      
            this.classList.add('active-tab');
            document.getElementById(target).classList.add('active');
          });
        });
      
        // Checkbox change event
        [hccCheckbox, rxCheckbox, brCheckbox].forEach(function(checkbox) { // Include brCheckbox in the array
          checkbox.addEventListener('change', function() {
            var tabId = this.id.split('-')[0];
      
            if (this.checked) {
              chrome.storage.sync.set({'defaultTab': tabId});
              toggleCheckbox(this, true);
            } else {
              chrome.storage.sync.remove('defaultTab');
              toggleCheckbox(this, false);
            }
          });
        });
      
        function toggleCheckbox(checkbox, isDisabled) {
          [hccCheckbox, rxCheckbox, brCheckbox].forEach(function(otherCheckbox) { // Include brCheckbox in the loop
            if (otherCheckbox !== checkbox) {
              otherCheckbox.disabled = isDisabled;
            }
          });
        }
      });
      
      

    document.addEventListener('DOMContentLoaded', function() {
      const highlightButton = document.getElementById('BillReviewButton');
  
      highlightButton.addEventListener('click', function() {
          // Send a message to the content script to process the input fields
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {action: "highlightInputs"});
          });
      });
  });
  
    
    const optionValues = [
      "$XX | Coupon at X Pharmacy",
      "Quantity Limit",
      "Manufacturer Coupon",
      "Rx'n Go",
      "Generic Substitution",
      "Home Delivery",
      "Step Therapy ",
      "Other..",
      "Preferred Pharmacy",
      "XXXX Formulary",
      "Medication Clarification",
      "Rx'n Go V2",
      "Over-the-counter",
      "Specialty Medication",
      "Compound Pharmacy",
      "Preventive Medication (confirmed $0)",
      "Excluded Medication (non-known for sure)",
      "Prior Authorization ",
      "Coverage Details (MyPrime, Elixir, Express prices)",
      "Common Dosage/Strength/Amount/Form",
      "Insurance Card",
      "Coverage Details (av retail)",
      "Preventive Medication (not confirmed price)",
      "Manufacturer Offer (not generated)",
      "Excluded Medication (non known for sure)",
      "Coverage Details (Copay+Generics)",
      "Home Delivery (Retail Refill Limitation)",
      "Coverage Details (Price advised by member higher)",
      "Coverage Details (Price advised by member lower)",
      "Excluded Medication",
      "Cost Plus Drug Online Pharmacy",
      "Amazon Pharmacy",
      "In-Network Pharmacies",
      "Coverage Details (HDHP High-Volume)",
      "Coverage Details (Copay High-Volume)"
    ];
    
    
    function populateOptions() {
      const container = document.getElementById('options-container');
      
      optionValues.forEach(value => {
        const optionContainer = document.createElement('div');
        optionContainer.classList.add('option');
    
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `option-${value}`;
        checkbox.value = value;
    
        checkbox.addEventListener('change', (event) => {
          if (event.target.checked) {
            uncheckAllExcept(value);
            handleCheckboxChange(value);
          }
        });
    
        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = value;
    
        optionContainer.appendChild(checkbox);
        optionContainer.appendChild(label);
        container.appendChild(optionContainer);
      });
    }
    
    function uncheckAllExcept(selectedValue) {
      optionValues.forEach(value => {
        if (value !== selectedValue) {
          document.getElementById(`option-${value}`).checked = false;
        }
      });
    }
    
    function handleCheckboxChange(optionValue) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "selectAndClick",
          optionValue: optionValue
        });
      });
    }
    
    document.addEventListener('DOMContentLoaded', populateOptions);
    
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action === "highlightInputs") {
          highlightInputFields();
      } else if (message.action === "pasteTextClicked") {
          chrome.storage.local.get(['valuesToCopy', 'tourIdValue'], (result) => {
              if (result.valuesToCopy && result.valuesToCopy.length > 0) {
                  distributeStoredValues(result.valuesToCopy, result.tourIdValue);
              } else {
                  console.log('No values found in storage to paste');
              }
          });
      }
  });
      