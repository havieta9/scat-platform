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

        <input
          class="css-header-search-search"
          type="text"
          placeholder="Search projects"
        />
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
        <div class="css-main-panel-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            data-v-066465b6=""
            width="24"
          >
            <path
              fill="#fff"
              d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
            ></path>
          </svg>
        </div>

        <div class="css-main-panel-button" id="css-selected-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            data-v-066465b6=""
            width="24"
          >
            <path
              fill="#ffffff"
              d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
            ></path>
          </svg>
        </div>

        <div class="css-main-panel-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            data-v-066465b6=""
            width="24"
          >
            <path
              fill="#ffffff"
              d="M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"
            ></path>
          </svg>
        </div>

        <div class="css-main-panel-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            data-v-066465b6=""
            width="24"
          >
            <path
              fill="#ffffff"
              d="M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
            ></path>
          </svg>
        </div>

        <div class="css-main-panel-button"></div>

        <div class="css-main-panel-button" id="css-last-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            data-v-066465b6=""
            width="24"
          >
            <path
              fill="#ffffff"
              d="M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"
            ></path>
          </svg>
        </div>
      </div>
      <WorkSpace></WorkSpace>
      <WorkProject></WorkProject>
      <WorkQuest></WorkQuest>
    </div>
  </div>
</template>

<script src="./AppScript.js"></script>

<style src="./AppStyle.css"></style>
