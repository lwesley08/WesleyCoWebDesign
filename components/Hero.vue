<template>
  <div class="hero">
    <div class="hero__text-container">
      <h2 class="hero__title">Modern Designs with a <span class="hero__title--accent">Classic Flair</span></h2>
    </div>
    <div class="hero__image-container">
      <img class="hero__image" src="/HeroImage.png"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  box-sizing: border-box;
  width: 100%;
  height: 75vh;
  padding: 0px 80px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  &__text-container {
    width: 483px;
  }

  &__title {
    font-family: 'Raleway';
    font-size: 48px;
    font-weight: 300;
    line-height: 61px;
    letter-spacing: 0.125em;

    &--accent {
      font-family: Tangerine;
      font-size: 61px;
      font-weight: 400;
      line-height: 61px;
      letter-spacing: 0.125em;
    }
  }
}
</style>
