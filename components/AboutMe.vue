<template>
  <div class="about">
    <div class="about__text-container">
      <h2 class="about__title">About Me</h2>
      <p class="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore
        magna aliqua. In metus vulputate eu scelerisque felis imperdiet. Sed sed risus pretium quam vulputate dignissim
        suspendisse in. Tempus urna et pharetra pharetra massa massa ultricies mi. Vel risus commodo viverra maecenas
        accumsan. Elit pellentesque habitant morbi tristique. Senectus et netus et malesuada fames ac. Enim ut tellus
        elementum sagittis vitae et leo duis. Semper risus in hendrerit gravida rutrum.</p>
    </div>
    <div class="about__img-container">
      <div class="about__img"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  @include contentContainer;
  background-color: $sassy-sage;
  min-height: 660px;
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
  }

  &__text-container {
    color: $falling-petals;
    max-width: 660px;
    order: 2;
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
    background-color: $falling-petals;
  }
}
</style>