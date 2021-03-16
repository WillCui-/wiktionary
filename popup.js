let searchText = document.getElementById("search");
let submitButton = document.getElementById("submit");

function submitSearch() {
    chrome.storage.sync.get("language", ({ language }) => {
        let url = 'https://' + language + '.wiktionary.org/wiki/' + searchText.value;
        chrome.tabs.create({ url: url });
        searchText.value = '';
    });
}

searchText.addEventListener("keyup", (event) => {
    if (event.key === 'Enter') {
        submitSearch();
    }
});

submitButton.addEventListener("click", () => {
    submitSearch();
});