import { BUILD } from "./entryComponent.js";

// -- Inserts Component into DOM -- //

let journalLog = document.querySelector(".entryLog");

const RENDER = {
  insertComponent: function(journalArrayObj) {
    for (let i = 0; i < journalArrayObj.length; i++) {
      journalLog.appendChild(BUILD.makeJournalEntryComponent(journalArrayObj[i]));
    }
  }
};

export { RENDER, journalLog };

