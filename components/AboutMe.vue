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
  background-color: $sassy-sage;
  box-sizing: border-box;
  width: 100%;
  min-height: 660px;
  padding: 80px;
  display: flex;
  justify-content: space-between;

  &__text-container {
    color: $falling-petals;
    max-width: 660px;
  }

  &__title {
    font-family: Raleway;
    font-size: 55px;
    font-weight: 300;
    line-height: 66px;
    letter-spacing: 0.015em;
  }

  &__description {
    font-family: Raleway;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0.015em;
  }

  &__img {
    width: 244px;
    height: 244px;
    border-radius: 50%;
    background-color: $falling-petals;
  }
}
</style>