import { API } from "./data.js";
import {
  UTILITY,
  journalDateInput,
  conceptsCoveredInput,
  journalEntryInput,
  moodSelectInput
} from "./utility.js";
import { RENDER } from "./entriesDOM.js";
import { EVENTS } from "./events.js";
import { BUILD } from "./entryComponent.js";

// -- Initial Load --//

API.getJournalEntries().then(entries => {
  console.log(entries)
  RENDER.insertComponent(entries);
});

// -- Submit Button Listener -- //

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", () => {
  event.preventDefault(); //Prevents page from refreshing
  let formVal = UTILITY.formValidation();
  let formValChar = UTILITY.formValidationChar();
  let formValConLen = UTILITY.formValidationConceptLength();
  if (formVal === true && formValChar === true && formValConLen === true) {
    let newJournalEntry = UTILITY.createNewEntry(
      journalDateInput,
      conceptsCoveredInput,
      journalEntryInput,
      moodSelectInput
    );
    API.saveJournalEntry(newJournalEntry);
    journalDateInput.value = "";
    conceptsCoveredInput.value = "";
    journalEntryInput.value = "";
    moodSelectInput.value = "default";
  } else {
    alert("Please finish filling out your Journal!");
  }
});

//-- Mood Filter --//

EVENTS.moodFilter();

//--Search Box --//

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
        for(const x of Object.values(lowerCaseEntry)) {
          if (x.includes(lowerSearch) === true  && !searchResults.includes(entry)){
            searchResults.push(entry);
          }
        }
      });
      let journalLog = document.querySelector(".entryLog");
      console.log(searchResults);
      journalLog.innerHTML = "";
      RENDER.insertComponent(searchResults);
    });
  }
});

