import { API } from "./data.js";
import { UTILITY } from "./utility.js";


const BUILD = {
  // -- Creates Entries -- //
  makeJournalEntryComponent: function(journalEntry) {
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
    let editBtn = document.createElement("button")
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
    editBtn.textContent = "Edit";
    editBtn.setAttribute("id", `${journalEntry.id}`)
    divContainer.setAttribute("class", "journal_entry");
    deleteBtn.addEventListener("click", () => {
      let id = event.target.id;
      API.deleteJournalEntry(id);
      window.location.reload();
    });
    editBtn.addEventListener("click", () => {
      divContainer.appendChild(BUILD.editFormComponent(journalEntry));
      editBtn.setAttribute("disabled", "true");
    });
    divContainer.appendChild(h2Date)
    divContainer.appendChild(divDate)
    divContainer.appendChild(h2Title)
    divContainer.appendChild(divTitle)
    divContainer.appendChild(h2Entry)
    divContainer.appendChild(divEntry)
    divContainer.appendChild(h2Mood)
    divContainer.appendChild(divMood)
    divContainer.appendChild(deleteBtn)
    divContainer.appendChild(editBtn)
    documentFragment.appendChild(divContainer)
    return documentFragment;
  },
  //-- EDITS ENTRY COMPONENT --//
  editFormComponent: function(journalEntry) {
    let editDiv = document.createElement("div");
    let editSave = document.createElement("button");
    let editForm = `
    <form class ="editForm" action="">
    <fieldset class="editFieldset">
    <label for="journalDate">Date of entry</label>
      <input type="date" name="journalDate" id="journalDateEdit" value="${journalEntry.entry_date}" />
      </fieldset>
    <fieldset class="editFieldset">
    <label for="conceptsCovered">Concepts covered</label>
      <input type="text" name="conceptsCovered" id="conceptsCoveredEdit" value="${journalEntry.entry_title}"/>
    </fieldset>
    <fieldset class="editFieldset">
    <label for="journalEntry">Journal Entry</label>
    <textarea
        name="journalEntry"
        id="journalEntryEdit"
        placeholder="What did you learn today?"
        cols="40"
        rows="5"
      >${journalEntry.entry_text}</textarea>
      </fieldset>
    <fieldset class="editFieldset">
      <label for="moodSelect">How are you feeling today?</label>
      <select id="moodSelectEdit">
        <option value="default"></option>
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Frustrated">Frustrated</option>
        <option value="Confident">Confident</option>
        <option value="Neutral">Neutral</option>
        </select>
        </fieldset>
        </form>
        `
        editDiv.innerHTML = editForm;
        editSave.textContent = "Save";
        editSave.setAttribute("id", `${journalEntry.id}`)
        editDiv.appendChild(editSave);
        editSave.addEventListener("click", () => {
          let journalDateInput = document.querySelector("#journalDateEdit");
          let conceptsCoveredInput = document.querySelector("#conceptsCoveredEdit");
          let journalEntryInput = document.querySelector("#journalEntryEdit");
          let moodSelectInput = document.querySelector("#moodSelectEdit");
          let updatedEntry = UTILITY.createNewEntry(
            journalDateInput,
            conceptsCoveredInput,
            journalEntryInput,
            moodSelectInput
          );
          updatedEntry.id = journalEntry.id
          API.editJournalEntry(updatedEntry);
          window.location.reload();
        });
        return editDiv;
      }
    };

    
export { BUILD };



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
// let editDate = document.createElement("input")
// let editConcept = document.createElement("input");
// editDate.setAttribute("type", "date");
// editDate.setAttribute("name", "journalDate")
// editDate.setAttribute("id", `journalDate-${journalEntry.id}`)
// editDate.setAttribute("value", `${journalEntry.entry_date}`);
// editConcept.setAttribute("type", "text");
// editConcept.setAttribute("name", "conceptsCovered");
// editConcept.setAttribute("id", `conceptsCovered-${journalEntry.id}`);
// editConcept.value = `${journalEntry.entry_title}`;
// editDiv.appendChild(editDate);
// editDiv.appendChild(editConcept);