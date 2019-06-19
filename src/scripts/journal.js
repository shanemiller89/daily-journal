// -- Grabs date, changes to object, inserts data into DOM --//

API.getJournalEntries().then(entries_obj => {
  RENDER.insertComponent(entries_obj);
});

// -- Submit Button Listener -- //

const submitBtn = document.querySelector(".submit-btn");

// submitBtn.addEventListener("click", )

// -- Input Fields -- //
let journalDateInput = document.querySelector("#journalDate");
let conceptsCoveredInput = document.querySelector("#conceptsCovered");
let journalEntryInput = document.querySelector("#journalEntry");
let moodSelectInput = document.querySelector("#moodSelect");

// -- Factory function for journal entries -- //

function createNewEntry(date, concept, entry, mood) {
  return {
    "entry_date": date.value,
    "entry_title": concept.value,
    "entry_text": entry.value,
    "entry_mood": mood.value
  }
}

console.log(createNewEntry(journalDateInput, conceptsCoveredInput, journalEntryInput, moodSelectInput))