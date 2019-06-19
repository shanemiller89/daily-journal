// -- Grabs date, changes to object, inserts data into DOM --//

API.getJournalEntries().then(entries_obj => {
  RENDER.insertComponent(entries_obj);
});

// -- Submit Button Listener -- //

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", () => {
  event.preventDefault(); //Prevents page from refreshing
  let formVal = formValidation();
  let formValChar = formValidationChar();
  if (formVal === true && formValChar === true) {
    let newJournalEntry = createNewEntry(journalDateInput, conceptsCoveredInput, journalEntryInput, moodSelectInput);
    postJournalEntry(newJournalEntry);

  } else {
    alert ("Please finish filling out your Journal!")
  }
})  // formValidationChar();

// -- Input Fields -- //
let journalDateInput = document.querySelector("#journalDate");
let conceptsCoveredInput = document.querySelector("#conceptsCovered");
let journalEntryInput = document.querySelector("#journalEntry");
let moodSelectInput = document.querySelector("#moodSelect");

if (conceptsCoveredInput.value.length > 40)
ret

// -- Factory function for journal entries -- //

function createNewEntry(date, concept, entry, mood) {
  return {
    "entry_date": date.value,
    "entry_title": concept.value,
    "entry_text": entry.value,
    "entry_mood": mood.value
  };
}

// -- Form Validation -- //
function formValidation() {
  if(journalDateInput.value == "") {
    alert("Please provide a date!");
    journalDateInput.focus() ;
    return false;
  }
  else if(conceptsCoveredInput.value == "") {
    alert("Please provide what was covered!");
    conceptsCoveredInput.focus() ;
    return false;
  }
  else if(journalEntryInput.value == "") {
    alert("Please provide a 'Journal Entry!'");
    journalEntryInput.focus() ;
    return false;
  }
  else if(moodSelectInput.value == "") {
    alert("Please provide your mood!");
    moodSelectInput.focus() ;
    return false;
  }
  else {
    return true ;
  }
}

function formValidationChar () {
  let allowedChar = /^[0-9a-zA-Z()/{}:;. ]+$/;
  if ((conceptsCoveredInput.value.match(allowedChar)) && (journalEntryInput.value.match(allowedChar))) {
    return true;
  } 
  else {
    alert("Improper characters used");
    return false;
  }
}

// -- Post Data to Database -- //

function postJournalEntry(entry) {
  fetch("http://localhost:8088/collectionJournalEntries", { 
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(entry)
})
}