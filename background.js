var language = 'en';

function searchWiki(searchText) {
  chrome.storage.sync.get("language", ({ language }) => {
    let url = 'https://' + language + '.wiktionary.org/wiki/' + searchText;
    chrome.tabs.update({ url: url });
  });
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ "language": language });

  chrome.contextMenus.create({
    id: "wiktionary",
    title: "Search Wiktionary for \'%s\'",
    contexts: ["selection"],
  });
});

chrome.omnibox.onInputEntered.addListener((searchText) => {
  searchWiki(searchText);
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  searchWiki(info.selectionText);
});