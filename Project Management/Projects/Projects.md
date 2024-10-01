---
obsidianUIMode: preview
---

```button
name New Project
type command
action QuickAdd: New Project
class button_2
```

<br>

#### <font color="red"> Open Projects </font>
```dataview
TABLE  
OpenTasks.text as "Open Tasks", 
Urgency as Urgency, 
DueDate as Date,
Responsible + "<br>" + Department as "Responsible and Department",
embed(link(meta(CoverImg).path, "125")) as "Image"

FROM "Projects"

WHERE file != this.file
WHERE Completed = False and Limbo = False 

FLATTEN list(flat(file.inlinks.file.tasks)) as AllProjectTasks
FLATTEN list(filter(AllProjectTasks, (task) => !task.completed)) as OpenTasks
```


<BR>

#### <font color="orange"> Limbo </font>
```dataview
TABLE  
OpenTasks.text as "Waiting for:", 
Urgency as Urgency, 
DueDate as "Date"

FROM "Projects"

WHERE file != this.file
WHERE Completed = False and Limbo = True 

FLATTEN list(flat(file.inlinks.file.tasks)) as AllProjectTasks
FLATTEN list(filter(AllProjectTasks, (task) => !task.completed)) as OpenTasks
```


<BR>

#### <font color="green"> Finished Projects </font>

```dataview
TABLE WITHOUT ID
file.link as Project, DueDate, CompletionDate, Department
FROM "Projects"
WHERE Type = "Project" 
Where Completed = True
```


---
<br>
<br>

#### <font color="violet"> Last modified Notes:</font>


```dataview
TABLE dateformat(file.mtime, "dd.MM.yyyy - HH:mm") AS "Last modified"
FROM ""
SORT file.mtime DESC
LIMIT 10
```


