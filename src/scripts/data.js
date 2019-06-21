// -- Grabs journal data from entries database --//

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
  saveJournalEntry: function(entry) {
    return API.postJournalEntry(entry)
      .then(API.getJournalEntries)
      .then(entries_obj => {
        RENDER.insertComponentSave(entries_obj);
      });
  }
};
