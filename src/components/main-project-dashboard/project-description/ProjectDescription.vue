<template>
  <div class="css-project-description-wrap">
    <div class="css-project-description-swrap">
      <div class="css-project-description-flex">
        <div class="css-project-description-head">
          <button
            class="css-project-description-close"
            @click="closeElementDescription()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              data-v-394d1fd8=""
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="css-project-description-title">
          <span>SundaeSwap</span>
        </div>
        <div class="css-project-description-subtitle">
          <span>Description</span>
        </div>
        <div class="css-project-description-des">
          SundaeSwap is a decentralized exchange protocol for the Cardano
          Network, enabling native token and ADA exchanges for anyone. With its
          protocol, you will be able to swap, stake, lend, borrow, and more in a
          truly decentralized way!
        </div>
        <div class="css-project-description-subtitle">
          <span>Tags</span>
        </div>
      </div>
      <div class="css-project-description-pub">
        <div class="css-project-description-pub-t">Public discussion</div>
        <div class="css-project-description-pub-i">
          <div class="css-project-description-pub-p"></div>
          <input
            class="css-project-description-pub-c"
            id="comment"
            type="text"
            name="comment"
            placeholder="write a comment..."
          />
        </div>
        <div class="css-project-description-pub-l">
          <div class="css-project-description-pub-v">
            <div class="css-project-description-pub-vf">
              <span>
                <button
                  class="css-project-description-pub-vfa"
                  style="transform: scaleY(-1)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    data-v-394d1fd8=""
                    width="20"
                  >
                    <path
                      fill="currentColor"
                      d="M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"
                    ></path>
                  </svg></button
              ></span>
              <span>12</span>
              <span>
                <button class="css-project-description-pub-vfa">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    data-v-394d1fd8=""
                    width="20"
                  >
                    <path
                      fill="currentColor"
                      d="M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"
                    ></path>
                  </svg>
                </button>
              </span>
            </div>
          </div>
          <div class="css-project-description-pub-cr">
            <div class="css-project-description-pub-crn">
              Luis Hoskinson <span>2 hours ago</span>
            </div>
            <div class="css-project-description-pub-crc">
              I think this project is very promising in the cardano ecosystem, I
              am an investor and I would like to know the result of this audit.
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script src="./ProjectDescriptionScript.js"></script>

<style src="./ProjectDescriptionStyle.css"></style>