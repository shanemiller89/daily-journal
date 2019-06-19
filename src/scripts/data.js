// -- Grabs journal data from entries database --//

const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/collectionJournalEntries")
        .then(response => response.json())
    }
};