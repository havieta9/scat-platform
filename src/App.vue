<template>
  <div class="css-main-container">
    <header>
      <div class="css-left-panel-button">
        <svg
          class="css-svg-icon"
          focusable="false"
          width="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </div>
      <div class="css-header-logo">
        <b></b>
      </div>

      <div class="css-header-search-search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          data-v-066465b6=""
          width="16"
        >
          <path
            fill="currentColor"
            d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
          ></path>
        </svg>

        <input class="css-header-search-search" type="text" placeholder="Search projects" />
      </div>

      <div class="css-header-avatar-wrap">
        <div class="css-header-avatar-con">
          <img class="css-header-avatar-img" src="./assets/perfil.png" alt="" />
        </div>
        <div class="css-header-avatar-desc">
          <div class="css-header-avatar-desc-n">
            <b>Andrea Smith</b>
          </div>
          <div class="css-header-avatar-desc-r">Queen Auditor</div>
        </div>
      </div>
    </header>
    <div class="css-main-flex-wrap">
      <div class="css-main-left-panel">
        <div class="css-main-panel-button" id="css-blue-button"></div>
        <div class="css-main-panel-button" id="css-blue-button"></div>
        <div class="css-main-panel-button" id="css-blue-button"></div>
        <div class="css-main-panel-button"></div>
        <div class="css-main-panel-button" id="css-last-button">
          <img width="24" src="./assets/icon01.svg" alt="" />
        </div>
      </div>
      <WorkSpace></WorkSpace>
      <WorkProject></WorkProject>
      <TeamDev></TeamDev>
    </div>
  </div>
</template>

<script src="./AppScript.js"></script>

<style src="./AppStyle.css"></style>
