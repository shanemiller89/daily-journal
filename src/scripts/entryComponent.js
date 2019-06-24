import { API } from "./data.js";

// -- Creates Entries -- //

const BUILD = {
  makeJournalEntryComponent: function(journalEntry) {
    // return `
    // <div class="journal_entry" id="journal-${journalEntry.id}">
    //   <h2>Date of Entry:</h2>
    //   <div>${journalEntry.entry_date}</div>
    //   <h2>Concepts Covered:</h2>
    //   <div>${journalEntry.entry_title}</div>
    //   <h2>Journal Entry:</h2>
    //   <div>${journalEntry.entry_text}</div>
    //   <h2>How are you feeling today?</h2>
    //   <div>${journalEntry.entry_mood}</div>
    //   <div><button id="deleteBtn-${journalEntry.id}" class="delete-btn">Delete</button></div>
    // </div>
    //   `;
    let documentFragment = document.createDocumentFragment();
    let divContainer = document.createElement("div");
    let h2Date = document.createElement("h2");
    let divDate = document.createElement("div");
    let h2Title = document.createElement("h2");
    let divTitle = document.createElement("div");
    let h2Entry = document.createElement("h2");
    let divEntry = document.createElement("div");
    let h2Mood = document.createElement("h2");
    let divMood = document.createElement("div");
    let deleteBtn = document.createElement("button");
    h2Date.innerHTML = "Date of Entry: ";
    divDate.innerHTML = `${journalEntry.entry_date}`;
    h2Title.innerHTML= "Concepts Covered: "
    divTitle.innerHTML = `${journalEntry.entry_title}`;
    h2Entry.innerHTML = "Journal Entry: ";
    divEntry.innerHTML = `${journalEntry.entry_text}`;
    h2Mood.innerHTML = "Current Mood: ";
    divMood.innerHTML = `${journalEntry.entry_mood}`;
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("id", `${journalEntry.id}`)
    divContainer.setAttribute("class", "journal_entry");
    deleteBtn.addEventListener("click", () => {
      let id = event.target.id;
      console.log(id)
      API.deleteJournalEntry(id);
      window.location.reload();
    })
    divContainer.appendChild(h2Date)
    divContainer.appendChild(divDate)
    divContainer.appendChild(h2Title)
    divContainer.appendChild(divTitle)
    divContainer.appendChild(h2Entry)
    divContainer.appendChild(divEntry)
    divContainer.appendChild(h2Mood)
    divContainer.appendChild(divMood)
    divContainer.appendChild(deleteBtn)
    documentFragment.appendChild(divContainer)
    return documentFragment;
  }
};

export { BUILD };

