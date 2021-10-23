import { createApp } from 'vue'
import App from './App.vue'

import WorkQuest from "./components/teamAudit/work-questions/WorkQuest"
import WebTool from "./components/webAudit/web-tool/WebTool"
import AuditTool from "./components/smartAudit/audit-tool/AuditTool"

import WorkSpace from "./components/teamAudit/work-space/WorkSpace"
import WorkProject from "./components/teamAudit/work-project/WorkProject"

const app = createApp(App);




app.component("WorkSpace", WorkSpace);
app.component("WorkProject", WorkProject);
app.component("WorkQuest", WorkQuest);

app.component("WebTool", WebTool);
app.component("AuditTool", AuditTool);


app.mount('#app')

