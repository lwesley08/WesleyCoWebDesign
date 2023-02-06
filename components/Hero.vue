<template>
  <div class="hero">
    <div class="hero__text-container">
      <h2 class="hero__title">Modern Designs with a <span class="hero__title--accent">Classic Flair</span></h2>
      <div class="hero__cta-container">
        <button class="hero__cta hero__cta--portfolio">Past Work</button>
        <button class="hero__cta hero__cta--contact">Get In Touch</button>
      </div>
    </div>
    <div class="hero__image-container">
      <img class="hero__image" src="/HeroImage.png" />
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
      display: inline-block;
      font-family: Tangerine;
      font-size: 61px;
      font-weight: 400;
      line-height: 61px;
      letter-spacing: 0.125em;
      transform: translateY(8px);
    }
  }

  &__cta {
    width: 213px;
    padding-top: 14px;
    padding-bottom: 19px;
    border-radius: 0px;
    font-family: Raleway;
    font-size: 23px;
    font-weight: 300;
    line-height: 27px;

    &--portfolio {
      margin-right: 30px;
      background: none;
      border: 1.5px solid black;
      box-shadow: 6px 6px 0px 0px #000000;
    }

    &--contact {
      color: $falling-petals;
      background: black;
      border: 1.5px solid $falling-petals;
      box-shadow: 6px 6px 0px 0px #000000;
    }
  }
}
</style>
