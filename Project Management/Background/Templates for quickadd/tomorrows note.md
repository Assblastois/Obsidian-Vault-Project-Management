---
Type: DailyNote
QuickFind: 
Arbeitsstunden:
---
[Project::  [[ <% tp.file.folder()%> ]] ]

<%*
const DailyNotesFolder = 'Daily notes';
const tomorrow = tp.date.tomorrow('YYYY-MM-DD');
let dailyNoteNumber = 1;

// Get list of all meetings today
const tomorrowsDailyNote = app
  .vault
  .getAbstractFileByPath(DailyNotesFolder)
  .children
  .filter(child => child instanceof tp.obsidian.TFile && child.basename.startsWith(`${tomorrow}`));
// If there are any meetings that already happened today,
// set meeting number to last meeting number plus 1
if (tomorrowsDailyNote.length) {
  tomorrowsDailyNote.sort((a, b) => a.path < b.path ? 1 : -1);
  const latestDailyNote = tomorrowsDailyNote[0];
  dailyNoteNumber = parseInt(latestDailyNote.basename.match(/\d+$/)[0], 10) + 1;
}

const dailyNoteName = `${tomorrow} No. ${dailyNoteNumber}`;
await tp.file.rename(dailyNoteName)
-%>
  