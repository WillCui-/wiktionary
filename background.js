chrome.omnibox.onInputEntered.addListener((searchText) => {
    let url = 'https://en.wiktionary.org/wiki/' + searchText;
    chrome.tabs.update({ url: url });
})