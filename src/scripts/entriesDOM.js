import { BUILD } from "./entryComponent.js";
import { API } from "./data.js";

// -- Inserts Component into DOM -- //

let journalLog = document.querySelector(".entryLog");

const RENDER = {
  insertComponent: function(journalObj) {
    for (let i = 0; i < journalObj.length; i++) {
      journalLog.innerHTML += BUILD.makeJournalEntryComponent(journalObj[i]);
    }
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

export { RENDER };
