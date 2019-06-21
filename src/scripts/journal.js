// -- Grabs date, changes to object, inserts data into DOM --//

API.getJournalEntries().then(entries_obj => {
  RENDER.insertComponent(entries_obj);
});

// -- Submit Button Listener -- //

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", () => {
  // event.preventDefault(); //Prevents page from refreshing
  let formVal = UTILITY.formValidation();
  let formValChar = UTILITY.formValidationChar();
  if (formVal === true && formValChar === true) {
    let newJournalEntry = UTILITY.createNewEntry(journalDateInput, conceptsCoveredInput, journalEntryInput, moodSelectInput);
    // API.saveJournalEntry(newJournalEntry);
    API.postJournalEntry(newJournalEntry);

  } else {
    alert ("Please finish filling out your Journal!")
  }
});

// -- Input Fields -- //
let journalDateInput = document.querySelector("#journalDate");
let conceptsCoveredInput = document.querySelector("#conceptsCovered");
let journalEntryInput = document.querySelector("#journalEntry");
let moodSelectInput = document.querySelector("#moodSelect");
