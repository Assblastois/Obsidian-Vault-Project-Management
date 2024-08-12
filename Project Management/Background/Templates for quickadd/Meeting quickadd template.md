---
Type: Meeting
QuickFind:
---
[Date:: <% tp.date.now() %>  ] 
[Project::  [[ <% tp.file.folder()%> ]] ]


Leader: 

Participants:

---

<%*
const meetingsFolder = 'Meetings';
const today = tp.date.now('YYYY-MM-DD');
let meetingNumber = 1;

// Get list of all meetings today
const todaysMeetings = app
  .vault
  .getAbstractFileByPath(meetingsFolder)
  .children
  .filter(child => child instanceof tp.obsidian.TFile && child.basename.startsWith(`Meeting ${today}`));
// If there are any meetings that already happened today,
// set meeting number to last meeting number plus 1
if (todaysMeetings.length) {
  todaysMeetings.sort((a, b) => a.path < b.path ? 1 : -1);
  const latestMeeting = todaysMeetings[0];
  meetingNumber = parseInt(latestMeeting.basename.match(/\d+$/)[0], 10) + 1;
}

const meetingName = `Meeting ${today} No. ${meetingNumber}`;
await tp.file.rename(meetingName)
-%>