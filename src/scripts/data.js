
const API = {
  getJournalEntries: function() {
    return fetch("http://localhost:8088/collectionJournalEntries").then(
      response => response.json()
    );
  },
  postJournalEntry: function(entry) {
    return fetch("http://localhost:8088/collectionJournalEntries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  },
};

export {API}