let searchText = document.getElementById("search");
let submitButton = document.getElementById("submit");

function submitSearch() {
    let url = 'https://en.wiktionary.org/wiki/' + searchText.value;
    chrome.tabs.create({ url: url });
    searchText.value = '';
}

searchText.addEventListener("keyup", (event) => {
    if (event.key === 'Enter') {
        submitSearch();
    }
});

submitButton.addEventListener("click", () => {
    submitSearch();
})