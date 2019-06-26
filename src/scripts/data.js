import { RENDER, journalLog } from "./entriesDOM.js";

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
  deleteJournalEntry: function(id) {
    return fetch(`http://localhost:8088/collectionJournalEntries/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  },
  editJournalEntry: function(entry) {
    return fetch(`http://localhost:8088/collectionJournalEntries/${entry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  },
  getAndUpdate: function() {
    return API.getJournalEntries().then(entries_obj => {
      journalLog.innerHTML = "";
      RENDER.insertComponent(entries_obj);
    });
  },
  saveJournalEntry: function(entry) {
    return API.postJournalEntry(entry)
      .then(API.getJournalEntries)
      .then(entries_obj => {
        journalLog.innerHTML = "";
        RENDER.insertComponent(entries_obj);
      });
  }
};

export { API };
