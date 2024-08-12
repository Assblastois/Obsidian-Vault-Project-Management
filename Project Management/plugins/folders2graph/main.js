(()=>{"use strict";var t={452:e=>{e.exports=require("obsidian")}},a={};function i(e){var r=a[e];return void 0!==r||(r=a[e]={exports:{}},t[e](r,r.exports,i)),r.exports}var e={};{var r=e,o=(Object.defineProperty(r,"__esModule",{value:!0}),i(452));const l="tag";class d extends o.Plugin{async onload(){this.refreshGraphLeaves(),this.registerEvent(this.app.workspace.on("active-leaf-change",e=>{this.refreshGraphLeaves([e])})),this.registerEvent(this.app.workspace.on("layout-change",()=>{this.refreshGraphLeaves()}))}onunload(){this.getLeavesOfTypeGraph().forEach(e=>{e.view.renderer.originalSetData&&(e.view.renderer.setData=e.view.renderer.originalSetData,delete e.view.renderer.originalSetData,e.view.unload(),e.view.load())})}refreshGraphLeaves(e=this.getLeavesOfTypeGraph()){e.forEach(e=>{"graph"===e.view.getViewType()&&(this.injectDataInLeaf(e),e.view.unload(),e.view.load())})}injectDataInLeaf(e){const r=e.view.renderer;null==r.originalSetData&&(r.originalSetData=r.setData),r.setData=t=>{const a=new Set("/");if(Object.entries(t.nodes).forEach(([e,r])=>{e=this.getNodeParentFolders(e);r.folderNode||r.type==l||null==e||e.forEach(a.add,a)}),a.forEach(e=>{t.nodes[e]={type:l,links:{},folderNode:!0}}),Object.entries(t.nodes).forEach(([e,r])=>{r.type==l&&!r.folderNode||(r=this.getNodeParentFolder(e),t.nodes[r].links[e]=!0)}),r.originalSetData)return r.originalSetData(t);throw new Error("originalSetData is undefined.")}}getLeavesOfTypeGraph(){return this.app.workspace.getLeavesOfType("graph")}getNodeParentFolders(e){const r=["/"];e=e.split("/"),e=e.slice(0,e.length-1);let t="";return e.forEach(e=>{t+="/"+e,r.push(t)}),r}getNodeParentFolder(e){e=e.split("/");return"/"+e.slice(0,e.length-1).filter(e=>""!=e).join("/")}}r.default=d}var s,n=exports;for(s in e)n[s]=e[s];e.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();