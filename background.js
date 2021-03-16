let language = 'en';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ "language": language });
});

chrome.omnibox.onInputEntered.addListener((searchText) => {
  chrome.storage.sync.get("language", ({ language }) => {
    let url = 'https://' + language + '.wiktionary.org/wiki/' + searchText;
    chrome.tabs.update({ url: url });
  });
});