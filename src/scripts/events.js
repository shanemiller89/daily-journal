import { API } from "./data.js";
import { RENDER, journalLog } from "./entriesDOM.js";
import { UTILITY } from "./utility.js";


const EVENTS = {
  moodFilter: function() {
    const radioBtns = document.getElementsByName("moodFilter");

    radioBtns.forEach(radioBtn => {
      radioBtn.addEventListener("click", event => {
        const mood = event.target.value;
        API.getJournalEntries().then(entries_obj => {
          journalLog.innerHTML = "";
          let filteredEntry = entries_obj.filter(
            entry => entry.entry_mood === mood
          );
          RENDER.insertComponent(filteredEntry);
        });
      });
    });
  },
  // editSaveButton: function(button) {
  //   button.addEventListener("click", () => {
  //     let journalDateInput = document.querySelector("#journalDateEdit");
  //     let conceptsCoveredInput = document.querySelector("#conceptsCoveredEdit");
  //     let journalEntryInput = document.querySelector("#journalEntryEdit");
  //     let moodSelectInput = document.querySelector("#moodSelectEdit");
  //     let updatedEntry = UTILITY.createNewEntry(
  //       journalDateInput,
  //       conceptsCoveredInput,
  //       journalEntryInput,
  //       moodSelectInput
  //     );
  //     updatedEntry.id = journalEntry.id;
  //     API.editJournalEntry(updatedEntry)
  //   });
  // } Will Come back too
};

export { EVENTS };
