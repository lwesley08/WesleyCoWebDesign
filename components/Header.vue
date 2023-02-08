<template>
  <div class="header__container">
    <img class="header__image" src="/WesleyCoLogo.svg"/>
    <ThemeSelector/>
  </div>
</template>
<style lang="scss">
  .header {
    &__container {
      height: 75px;
      width: 100%;
      padding-top: 15px;
      padding-bottom: 6px;
      // display: flex;
      // justify-content: center;
      display: grid;
      grid-template-columns: 100px auto 100px;
      
      @include themify() {
        border-bottom: themed("section-border");
      }
    }

    &__image {
      grid-column: 2 / span 1;
      justify-self: center;
      align-self: center;
      width: 150px;
    }
  }
   
</style>
