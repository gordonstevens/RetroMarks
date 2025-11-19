chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'retromarks-manager.html' });
});
