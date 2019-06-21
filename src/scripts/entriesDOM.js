// -- Inserts Component into DOM -- //

let journalLog = document.querySelector(".entryLog");

const RENDER = {
    insertComponent: function (journalObj) {
        for (let i = 0; i < journalObj.length; i++) {
          journalLog.innerHTML += BUILD.makeJournalEntryComponent(journalObj[i])
        }
      }
};
