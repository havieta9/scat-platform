import { createApp } from 'vue'
import App from './App.vue'

import TeamDev from "./components/team-dev/TeamDev"
import WebTool from "./components/web-tool/WebTool"
import AuditTool from "./components/audit-tool/AuditTool"

import WorkSpace from "./components/work-space/WorkSpace"
import WorkProject from "./components/work-project/WorkProject"

const app = createApp(App);

app.component("TeamDev", TeamDev);
app.component("WebTool", WebTool);
app.component("AuditTool", AuditTool);

app.component("WorkSpace", WorkSpace);
app.component("WorkProject", WorkProject);

app.mount('#app')

