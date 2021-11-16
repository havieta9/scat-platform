<template>
  <div class="css-proposal-form-wrap">
    <div class="css-proposal-form-swrap">
      <div class="css-proposal-form-wcon">
        <div class="css-proposal-form-title">Submit Cardano Project</div>
        <div class="css-proposal-form">
          <form action="" method="post">
            <div class="css-proposal-form-divider">
              <div><span>Category</span></div>
              <input id="category" type="text" name="category" />
            </div>
            <div class="css-proposal-form-divider">
              <div><span>Name</span></div>
              <input id="name" type="text" name="Name" />
            </div>
            <div class="css-proposal-form-divider">
              <div><span>Description</span></div>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="css-proposal-form-divider">
              <div><span>Tags</span></div>
              <input id="tags" type="text" name="tags" />
            </div>
            <input type="submit" value="Save" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./ProposalFormScript.js"></script>

<style src="./ProposalFormStyle.css"></style>