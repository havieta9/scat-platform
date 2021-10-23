<template>
  <div class="css-work-quest-wrap">
    <div class="css-work-quest-page">
      <div>
        <span class="css-work-quest-pag">5</span
        ><span class="css-work-quest-div"> | </span>20
      </div>
    </div>
    <div class="css-work-quest-legend">
      Can you verify that each member of the development team is a real person?
    </div>
    <div class="css-work-quest-suggest">Select an option</div>

    <div class="css-work-quest-answer">
      <div class="css-work-quest-answer-item">
        <label class="control control--checkbox">
          <input type="checkbox" checked="checked" />
          <span class="control__indicator"></span>
          <span class="css-work-quest-item-label">Yes</span>
        </label>
      </div>

      <div class="css-work-quest-answer-item">
        <label class="control control--checkbox">
          <input type="checkbox" checked="checked" />
          <span class="control__indicator"></span>
          <span class="css-work-quest-item-label">No</span>
        </label>
      </div>
    </div>

    <div class="css-work-quest-nav">
      <div class="css-work-quest-arrow" id="left-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          data-v-066465b6=""
          width="24"
          style="transform: rotate(180deg);"
        >
          <path
            fill="var(--base-color-black-primary)"
            d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
          ></path>
        </svg>
        <span>Back</span>
      </div>
      <div class="css-work-quest-arrow" id="right-arrow">
        <span>Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          data-v-066465b6=""
          width="24"
        >
          <path
            fill="#fff"
            d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script src="./WorkQuestScript.js"></script>

<style  src="./WorkQuestStyle.css"></style>