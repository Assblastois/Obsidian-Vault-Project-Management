This is my personal Project Management Vault. 

I managed to automate most of it mainly relying on Dataview, Templater, Quickadd and Buttons. I created a thread on the Obsidian Forum where I go in depth of how my Vault works. This is always subject to change, depending on my current situation, but the logic stays fundamentally the same. Feel free to adapt and change "Project quickadd template.md" (located in Background/Templates for quickadd) to your needs. Just be careful with the Quickadd plugin because it is rather delicate and can break easily!

Enjoy!

Link to my Obsidian Forum post: https://forum.obsidian.md/t/my-project-management-workflow-an-in-depth-explanation/82508

### How to download and open this vault:
1. Download the .zip:

2. Extract the files to where you want to store them.

3. Go to the vault menu and chose “Open folder as vault”, select the folder you extracted and trust the plugins.

You should now have full access to the vault. If the dataview blocks don’t render correctly, close Obsidian and reopen.

### How it works:
This is the main page from which you have an overview about your projects. I have separated them into Open, Limbo (technically open, but not able to be worked on) and Finished. 
![image](https://github.com/user-attachments/assets/d0d9ff1a-e368-41b6-b1b7-0c29362fc034)

Clicking on New Project will Prompt you with several things. Modify them as you wish in the file Background/Templates_for_quickadd/Project_quickadd_template. This file is the main template that is used to give you an overview of the project. 
Each new Project-Note is also transformed into a folder. This is done with the Folder notes plugin. I usually leave them empty but feel free to fill them if you want. I personally put everything into the daily notes that are associated with the project. 

### Daily Notes:
Clicking the "Open Daily Note" Button prompts you with the option of opening a daily note for either today or tomorrow. This is sufficient for my use case. It will create a new note with todays or tomorrows date and a number. This means you can have multiple daily notes, when you work on multiple things at once on the same day!

![image](https://github.com/user-attachments/assets/f21839cb-5ce7-4553-b1e1-8440f8e42fc6)

Every daily note will automatically have a backlink to the project from where the daily note was created. Every associated daily note is listed and displayed with Dataview: 
![image](https://github.com/user-attachments/assets/cd25080e-7c64-4e20-9f42-310a06295bd2)

I put everything into the daily notes. Emails, PDFs, Images, and what ever else. All the daily notes are automatically moved into the daily note folder. You will not have to go look for them manually, because they are linked in the project-pages.
I have added a Quickfind property that allows you to indicate if something important is in that daily note. This will be displayed in the Quickfind column. 

### Tasks:
I use Tasks a lot. Every Task I create is done exclusively in the daily notes! Open task are displayed in the project-page AND the project overview page! 

### Meetings: 
I don't really use them, but here they are. As with the daily notes they will be linked to the project itself and just thrown into a general Meetings folder. 

### Landing page image: 
The base image that is associated with each project is placeholder.jpg and is linked in the properties under CoverImg. If you want to change the image, just replace it, by pasting the link to the new image (link as in file in double square brackets [[...]]). 
**If you don't want any image you must delete the property and delete `embed(link(meta(CoverImg).path, "125")) as "Image"` from the Dataview table. If you just delete the image the whole project will not be displayed in the Dataview table!**

I have also added two CSS-Snippets that allow you to float images, either to the left or right. `![[Pasted image 20240925082325.png|left|150]]` You can change the size by holding alt and scolling! 

![image](https://github.com/user-attachments/assets/3a402e8b-a509-40e5-ac64-d441b218363e)

### Misc:
- If you feel that the project-page is done, you can change the Property obsidianUIMode from empty to preview. This will force this note (and only this note) into reading mode, making the layout nicer. 
- If you use tables, change the theme.
- If the Dataview blocks and/or quoteblocks don't render properly try to close Obsidian and reopen. If this doesn't help switch from reading mode to editing mode. I have know idea why this happens. 


