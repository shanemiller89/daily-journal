// -- Grabs journal data from entries database --//
fetch("http://localhost:3000/collectionJournalEntries")
  .then(entries => entries.json())
  .then(parsedEntries => {
    console.log(parsedEntries)
    // -- For loop that inserts Entries -- // 
    for (let i = 0; i < parsedEntries.length; i++) {
      journalLog.innerHTML += makeJournalEntryComponent(parsedEntries[i])
    }
  });



// -- Creates Entries -- //

let journalLog = document.querySelector(".entryLog");

function makeJournalEntryComponent(journalEntry) {
  return `
<div class="journal_entry">
  <h2>Date of Entry:</h2>
  <div>${journalEntry.entry_date}</div>
  <h2>Concepts Covered:</h2>
  <div>${journalEntry.entry_title}</div>
  <h2>Journal Entry:</h2>
  <div>${journalEntry.entry_text}</div>
  <h2>How are you feeling today?</h2>
  <div>${journalEntry.entry_mood}</div>
</div>
  `;
}
