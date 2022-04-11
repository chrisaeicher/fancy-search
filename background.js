chrome.runtime.onInstalled.addListener((reason) => {
  chrome.tabs.create({
    url: "views/onboarding.html",
  });
  chrome.contextMenus.create({
    id: "selectionSearch",
    title: "Search this selection",
    contexts: ["selection"],
  });
});
