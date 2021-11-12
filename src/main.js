import { createApp } from "vue";
import App from "./App.vue";

import HomeLayout from "./components/main-project-dashboard/home-layout/HomeLayout";

import ProjectCard from "./components/main-project-dashboard/project-card/ProjectCard";

import WorkQuest from "./components/team-development-audit/work-questions/WorkQuest";
import WorkSpace from "./components/team-development-audit/work-space/WorkSpace";
import WorkProject from "./components/team-development-audit/work-project/WorkProject";

import WebTool from "./components/web-project-audit/web-tool/WebTool";

import AuditTool from "./components/smart-contract-audit/audit-tool/AuditTool";

const app = createApp(App);

app.component("HomeLayout", HomeLayout);
app.component("ProjectCard", ProjectCard);

app.component("WorkSpace", WorkSpace);
app.component("WorkProject", WorkProject);
app.component("WorkQuest", WorkQuest);

app.component("WebTool", WebTool);
app.component("AuditTool", AuditTool);

app.mount("#app");
