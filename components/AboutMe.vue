<template>
  <div class="about">
    <div class="about__text-container">
      <h2 class="about__title">About Me</h2>
      <p class="about__description">
        Hi. I’m Liberty Wesley, a web developer and designer with 6 years experience designing beautiful, mobile-ready
        websites for business of all kinds. Send me an email and let’s talk about creating a website as unique as your
        business.
      </p>
    </div>
    <div class="about__img-container">
      <div class="about__img">
        <img src="../public/Avatar.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  @include contentContainer;

  @include themify() {
    background-color: themed("background-color-secondary");
  }

  min-height: 500px;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @include tabletAndAbove {
    padding-bottom: 60px;
    padding-top: 60px;
  }

  @include laptopAndAbove {
    flex-direction: row;
    padding-bottom: 80px;
    padding-top: 80px;
    justify-content: space-between;
    align-items: unset;
  }

  &__text-container {
    max-width: 660px;
    order: 2;

    @include laptopAndAbove {
      order: unset;
    }

    @include themify() {
      color: themed("text-color-secondary");
    }
  }

  &__title {
    font-family: Raleway;
    font-weight: 300;
    font-size: 35px;
    line-height: 48px;
    letter-spacing: 0.015em;
    margin-bottom: 20px;
    text-align: center;

    @include tabletAndAbove {
      font-size: 55px;
      line-height: 61px;
      margin-bottom: 35px;
      text-align: left;
    }
  }

  &__description {
    font-family: Raleway;
    font-weight: 400;
    letter-spacing: 0.015em;
    font-size: 18px;
    line-height: 26px;
    text-align: justify;

    @include tabletAndAbove {
      font-size: 24px;
      line-height: 29px;
      text-align: left;
    }
  }

  &__img {
    width: 244px;
    height: 244px;
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
}
</style>