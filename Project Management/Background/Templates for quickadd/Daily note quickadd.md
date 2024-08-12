---
Type: DailyNote
QuickFind: 
Hours:
---
[Project::  [[ <% tp.file.folder()%> ]] ]

<%*
const DailyNotesFolder = 'Daily notes';
const today = tp.date.now('YYYY-MM-DD');
let dailyNoteNumber = 1;

// Get list of all meetings today
const todaysDailyNote = app
  .vault
  .getAbstractFileByPath(DailyNotesFolder)
  .children
  .filter(child => child instanceof tp.obsidian.TFile && child.basename.startsWith(`${today}`));
// If there are any meetings that already happened today,
// set meeting number to last meeting number plus 1
if (todaysDailyNote.length) {
  todaysDailyNote.sort((a, b) => a.path < b.path ? 1 : -1);
  const latestDailyNote = todaysDailyNote[0];
  dailyNoteNumber = parseInt(latestDailyNote.basename.match(/\d+$/)[0], 10) + 1;
}

const dailyNoteName = `${today} No. ${dailyNoteNumber}`;
await tp.file.rename(dailyNoteName)
-%>




