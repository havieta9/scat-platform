<template>
  <div class="css-home-layout-wrap">
    <div class="css-home-layout-container">
      <div class="css-home-layout-banner">
        <div class="css-home-layout-header">
          <div class="css-home-layout-round">
            <div class="css-home-layout-des">
              <span>Decentralized Audit of DeFi projects</span>
            </div>
            <button
              class="css-home-layout-button"
              @click="changeCurrentNav('Submit')"
            >
              Submit Proposal
            </button>
          </div>
        </div>
      </div>
      <div class="css-home-layout-nav">
        <span
          v-for="nav in listNavItems"
          :key="nav"
          @click="changeCurrentNav(nav)"
          >{{ nav }}</span
        >
      </div>
      <template v-if="currentNav === 'News'">
        <div class="css-home-layout-projects">
          <ProjectCard> </ProjectCard>
          <ProjectCard> </ProjectCard>
          <ProjectCard> </ProjectCard>
          <ProjectCard> </ProjectCard>
        </div>
      </template>
      <template v-if="currentNav === 'Submit'">
        <ProposalForm> </ProposalForm>
      </template>
    </div>
  </div>
</template>

<script src="./HomeLayoutScript.js"></script>

<style src="./HomeLayoutStyle.css"></style>
