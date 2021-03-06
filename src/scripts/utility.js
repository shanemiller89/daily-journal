// -- Input Fields -- //
let journalDateInput = document.querySelector("#journalDate");
let conceptsCoveredInput = document.querySelector("#conceptsCovered");
let journalEntryInput = document.querySelector("#journalEntry");
let moodSelectInput = document.querySelector("#moodSelect");

const UTILITY = {
  // -- Factory function for journal entries -- //
  createNewEntry: function(date, concept, entry, mood) {
    return {
      entry_date: date.value,
      entry_title: concept.value,
      entry_text: entry.value,
      entry_mood: mood.value
    };
  },
  // -- Form Validation -- //
  formValidation: function() {
    if (journalDateInput.value == "") {
      alert("Please provide a date!");
      journalDateInput.focus();
      return false;
    } else if (conceptsCoveredInput.value == "") {
      alert("Please provide what was covered!");
      conceptsCoveredInput.focus();
      return false;
    } else if (journalEntryInput.value == "") {
      alert("Please provide a 'Journal Entry!'");
      journalEntryInput.focus();
      return false;
    } else if (moodSelectInput.value == "default") {
      alert("Please provide your mood!");
      moodSelectInput.focus();
      return false;
    } else {
      return true;
    }
  },
  formValidationChar: function() {
    // let allowedChar = /^[0-9a-zA-Z()/{}:;!?'". ]+$/;
    let blackListChar = /[@#$%^&*|\+=_-]/;
    if (
      conceptsCoveredInput.value.match(blackListChar) &&
      journalEntryInput.value.match(blackListChar)
    ) {
      alert("You used one of the following: `@ # $ % ^ & * | \ + = _ -` Remove to submit form.")
      return false;
    } else {
      return true;
    }
  },
  formValidationConceptLength: function() {
    if (conceptsCoveredInput.value.length > 150) {
      alert("To many characters used");
      conceptsCoveredInput.focus();
      return false;
    } else {
      return true;
    }
  }
};

export {
  UTILITY,
  journalDateInput,
  conceptsCoveredInput,
  journalEntryInput,
  moodSelectInput
};
