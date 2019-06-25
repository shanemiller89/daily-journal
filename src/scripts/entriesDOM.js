import { BUILD } from "./entryComponent.js";

// -- Inserts Component into DOM -- //

let journalLog = document.querySelector(".entryLog");

const RENDER = {
  insertComponent: function(journalObj) {
    for (let i = 0; i < journalObj.length; i++) {
      journalLog.appendChild(BUILD.makeJournalEntryComponent(journalObj[i]));
    }
  }
};

export { RENDER, journalLog };

