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
  editSaveButton: function(button, journalEntry) {
    button.addEventListener("click", () => {
      let journalDateInput = document.querySelector("#journalDateEdit");
      let conceptsCoveredInput = document.querySelector("#conceptsCoveredEdit");
      let journalEntryInput = document.querySelector("#journalEntryEdit");
      let moodSelectInput = document.querySelector("#moodSelectEdit");
      let updatedEntry = UTILITY.createNewEntry(
        journalDateInput,
        conceptsCoveredInput,
        journalEntryInput,
        moodSelectInput
      );
      updatedEntry.id = journalEntry.id;
      API.editJournalEntry(updatedEntry)
        .then(newdata => newdata.json())
        .then(API.getAndUpdate);
    });
  },
  searchBox: function() {
    let searchBox = document.querySelector(".searchInput");
    searchBox.addEventListener("keypress", event => {
      if (event.charCode === 13) {
        event.preventDefault();
        let searchTerm = event.target.value;
        let lowerSearch = searchTerm.toLowerCase();
        let searchResults = [];
        API.getJournalEntries().then(entries => {
          entries.forEach(entry => {
            let lowerCaseEntry = {
              entry_date: entry.entry_date,
              entry_title: entry.entry_title.toLowerCase(),
              entry_text: entry.entry_text.toLowerCase(),
              entry_mood: entry.entry_mood.toLowerCase()
            };
            for (const x of Object.values(lowerCaseEntry)) {
              if (
                x.includes(lowerSearch) === true &&
                !searchResults.includes(entry)
              ) {
                searchResults.push(entry);
              }
            }
          });
          journalLog.innerHTML = "";
          RENDER.insertComponent(searchResults);
          searchBox.value = "";
        });
      }
    });
  }
};

export { EVENTS };
