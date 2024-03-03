let enabled = true;

// Listener for messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggle") {
    enabled = !enabled;
    sendResponse({ status: enabled });
  } else if (request.action === "openInNewTab" && enabled) {
    chrome.tabs.create({ url: request.url }, function(tab) {
      if (chrome.runtime.lastError) {
        console.error("Error opening new tab:", chrome.runtime.lastError.message);
      }
    });
  }
});

// Create a context menu item (optional, depending on your use case)
// Check if the context menu item already exists before creating it
chrome.contextMenus.removeAll(() => {
  chrome.contextMenus.create({
    id: "openInNewTab",
    title: "Open in New Tab",
    contexts: ["all"],
  });
});

// Optional: Listener for the context menu item click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openInNewTab" && enabled) {
    chrome.tabs.create({ url: tab.url });
  }
});


let originalTabId = null;
let newTabId = null; // To keep track of the new tab ID

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'openNewTab' && request.url) {
        originalTabId = sender.tab.id;
        chrome.tabs.create({ url: request.url, active: false }, function(newTab) {
            // The new tab opens in the background
            newTabId = newTab.id; // Store the new tab ID
            chrome.scripting.executeScript({
                target: { tabId: newTab.id },
                function: highlightOmniLogContent
            });
        });
    } else if (request.action === 'highlightedText' && request.text && originalTabId !== null) {
        chrome.tabs.sendMessage(originalTabId, { action: 'updateTooltipText', text: request.text, newTabId: newTabId });
        if (newTabId !== null) {
            chrome.tabs.remove(newTabId); // Close the new tab
            newTabId = null;
        }
        originalTabId = null;
    }
});

function highlightOmniLogContent() {
    function tryHighlight() {
        const targetElement = document.querySelector('div[data-test-id="omni-log-message-content"]');
        if (targetElement) {
            targetElement.style.backgroundColor = 'yellow';
            targetElement.scrollIntoView();
            chrome.runtime.sendMessage({ action: 'highlightedText', text: targetElement.innerText });
        } else {
            setTimeout(tryHighlight, 500);
        }
    }

    tryHighlight();
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openInNewTabInBackground") {
    // Open the URL in a new tab in the background
    chrome.tabs.create({ url: request.url, active: false });
  }
});
