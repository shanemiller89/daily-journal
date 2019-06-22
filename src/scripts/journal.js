import { API } from "./data.js";
import {
  UTILITY,
  journalDateInput,
  conceptsCoveredInput,
  journalEntryInput,
  moodSelectInput
} from "./utility.js";
import { RENDER, journalLog } from "./entriesDOM.js";

// -- Initial Load --//

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

//--Radio Filter --//

const radioBtns = document.getElementsByName("moodFilter");

radioBtns.forEach( radioBtn => {
    radioBtn.addEventListener("click", event => {
        const mood = event.target.value;
        API.getJournalEntries()
        .then(entries_obj => {
          journalLog.innerHTML = "";
          let filteredEntry = entries_obj.filter( entry => entry.entry_mood === mood)
          RENDER.insertComponent(filteredEntry);
        })
    })
});