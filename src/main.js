import { createApp } from 'vue'
import App from './App.vue'

import TeamDev from "./components/team-dev/TeamDev"
import WebTool from "./components/web-tool/WebTool"
import AuditTool from "./components/audit-tool/AuditTool"


const app = createApp(App);

app.component("TeamDev", TeamDev);
app.component("WebTool", WebTool);
app.component("AuditTool", AuditTool);

app.mount('#app')

