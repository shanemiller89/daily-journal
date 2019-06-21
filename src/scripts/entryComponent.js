// -- Creates Entries -- //

const BUILD = {
    makeJournalEntryComponent: function (journalEntry) {
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
};


export { BUILD }