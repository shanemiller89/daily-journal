import { API } from "./data.js";
import { RENDER, journalLog } from "./entriesDOM.js";

const EVENTS = {
  moodFilter: function() {
    const radioBtns = document.getElementsByName("moodFilter");

    radioBtns.forEach(radioBtn => {
      radioBtn.addEventListener("click", event => {
        const mood = event.target.value;
        API.getJournalEntries().then(entries_obj => {
          journalLog.innerHTML = "";
          let filteredEntry = entries_obj.filter(
            entry => entry.entry_mood === mood
          );
          RENDER.insertComponent(filteredEntry);
        });
      });
    });
  }
};

export { EVENTS };