// -- Grabs date, changes to object, inserts data into DOM --//

API.getJournalEntries().then(entries_obj => {
  RENDER.insertComponent(entries_obj);
});
