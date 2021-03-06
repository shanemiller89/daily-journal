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

EVENTS.searchBox()
