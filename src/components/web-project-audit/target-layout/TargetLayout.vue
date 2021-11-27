<template>
  <div class="css-target-layout-wrap">
    <div class="css-target-layout-bc">
      <button class="css-target-layout-add" @click="newTarget = !newTarget">
        Add
      </button>
    </div>
    <template v-if="newTarget">
      <div class="css-target-layout-new">
        <div class="css-target-layout-nt">Open Source URL</div>
      </div>
    </template>
    <div class="css-target-layout-tw">
      <div class="css-target-layout-cw">
        <div class="css-target-layout-cwi">wwww.example.com</div>
        <div class="css-target-layout-cwi">
          <div class="css-target-layout-cws">
            <div class="css-target-layout-cwst">
              <span>Target type</span>
            </div>
            <div class="css-target-layout-cwsb"><span>Swap</span></div>
          </div>
        </div>
        <div class="css-target-layout-cwi">
          <div class="css-target-layout-cws">
            <div class="css-target-layout-cwst">
              <span>Alerts</span>
            </div>
            <div class="css-target-layout-cwsb"><span>5</span></div>
          </div>
        </div>
        <div class="css-target-layout-cwi">
          <div class="css-target-layout-cws">
            <div class="css-target-layout-cwst">
              <span>Alert Risk</span>
            </div>
            <div class="css-target-layout-cwsb">
              <span>*</span><span>*</span><span>*</span>
            </div>
          </div>
        </div>
        <div class="css-target-layout-cwi">
          <span class="css-target-layout-del">Delete</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./TargetLayoutScript.js"></script>

<style src="./TargetLayoutStyle.css">
</style>