<template>
  <div class="header__container">
    <img class="header__image" src="/WesleyCoLogo.svg"/>
  </div>
</template>
<style lang="scss">
  .header {
    &__container {
      height: 75px;
      width: 100%;
      padding-top: 15px;
      padding-bottom: 6px;
      display: flex;
      justify-content: center;
      
      @include themify() {
        border-bottom: themed("section-border");
        img {
          filter: themed("logo-filter");
        }
      }
    }
  }
   
</style>
