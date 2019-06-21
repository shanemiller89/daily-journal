import { API } from "./data.js";
import {
  UTILITY,
  journalDateInput,
  conceptsCoveredInput,
  journalEntryInput,
  moodSelectInput
} from "./utility.js";
import { RENDER } from "./entriesDOM.js";

// -- Grabs data, changes to object, inserts data into DOM --//

API.getJournalEntries().then(entries_obj => {
  RENDER.insertComponent(entries_obj);
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
    RENDER.saveJournalEntry(newJournalEntry);
  } else {
    alert("Please finish filling out your Journal!");
  }
});
