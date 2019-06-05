const collectionJournalEntry = [];

const objectsJournalEntry = {
  entry_date: "",
  entry_title: "",
  entry_text: "",
  entry_mood: ""
};

const entry1 = {
  entry_date: "5/20/2019",
  entry_title: "First-Day, Intial Setup",
  entry_text:
    "Most of the information today has been about school rules " +
    "and the process we have been going through. We did setup on " +
    "our laptops, which was actually a lot of fun!",
  entry_mood: "Happy"
};
const entry2 = {
  entry_date: "5/30/2019",
  entry_title: "Presenting our first group projects",
  entry_text:
    "Over the past few days we have been working on our group projects. " +
    "We had to focus on the github flow and working on github with a team. " +
    "Only HTML and CSS were allowed to be used. I am very proud of how " +
    "our team worked together, and more than happy with how our website " +
    "came out. Note to self, flexbox or floats, but not",
  entry_mood: "Confident"
};

const entry3 = {
  entry_date: "6/4/19",
  entry_title: "Functions and Objects...",
  entry_text:
    "Today we went more in depth into functions and objects. We went over " +
    "targeting objects, and utilizing functions. I had a lot of issues with " +
    "the practice work. I didn't even know where to start. This would be a " +
    "good time to remember about breaking down the problem into small components " +
    "and tackling each one by a one-on-one basis.",
  entry_mood: "Frusterated"
};

function addJournal(newEntry) {
  collectionJournalEntry.push(newEntry);
}

addJournal(objectsJournalEntry);
addJournal(entry1);
addJournal(entry2);
addJournal(entry3);