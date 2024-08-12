---
Type: Project
Department: <% await tp.system.suggester(["Option1", "Option2", "Option3", "Option4"], ["Option1", "Option2", "Option3", "Option4"]) %>
QuickFind: 
Completed: false
Limbo: false
obsidianUIMode: 
CoverImg: "[[placeholder.jpg]]"
CompletionDate:
---

[DueDate:: <% tp.file.cursor(1)%> ]
[Urgency:: <% tp.user.urgencyPicker(tp) %> ]
[Responsible:: <%tp.system.prompt("Who is this projects boss?")%>]

```button
name Open Daily Note
type command
action QuickAdd: daily note
class button_1
```

>[!todo] 
>```dataview
task from [[]]
where !completed 
Group by file.name 


<br>

```dataviewjs
const notes = await dv.query (`
TABLE 
  R.file.link as Project, R.QuickFind as QuickFind, R.Arbeitsstunden as Arbeitsstunden
FROM
  [[]]
GROUP BY
  Type
FLATTEN rows as R
SORT Type
`)

console.log(notes)

if (!notes.successful) {
  dv.paragraph(`~~~~\n${ notes.error }\n~~~~\n`)
  return
}

let typeDict = {}
for (let note of notes.value.values) {
  if ( !typeDict.hasOwnProperty(note[0]) )
    typeDict[note[0]] = []

  typeDict[note[0]].push([...note.slice(1)])
}

for (let key of Object.keys(typeDict)) {
  dv.header(2, key)
  dv.table([...notes.value.headers.slice(1)],
    typeDict[key])
}
```
--- 

```button
name New Meeting
type command
action QuickAdd: Meeting
class button_1
```

```ad-Workflow
[Workflow](<% tp.system.prompt("Link to Workflow")%>)

```

| N° demande de posage | Workspace | New Number | ID of affected construction / raw part |
| -------------------- | --------- | ---------- | -------------------------------------- |
|                      |           |            |                                        |


```ad-new_parts
.
```

```ad-Remarque
.
```

```ad-Description
collapse: open
.

```

```ad-relevant
title: Relevant files / Articles
collapse: open
.

```



---

##### Relevant Links:


---

##### Relevant notes:



---

<br>
