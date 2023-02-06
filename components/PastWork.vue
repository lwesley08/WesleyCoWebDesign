<template>
  <div class="portfolio">
    <h3 class="portfolio__title">Past Work</h3>
    <div class="portfolio__project-container">
      <div class="portfolio__project-thumbnail portfolio__project-thumbnail--one"></div>
      <div class="portfolio__project-thumbnail portfolio__project-thumbnail--two"></div>
      <div class="portfolio__project-thumbnail portfolio__project-thumbnail--three"></div>
      <div class="portfolio__project-thumbnail portfolio__project-thumbnail--four"></div>
      <div class="portfolio__project-thumbnail portfolio__project-thumbnail--five"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio {
  box-sizing: border-box;
  width: 100%;
  min-height: 1000px;
  padding: 80px;
  border-bottom: solid black 1.5px;

  &__title {
    font-family: Raleway;
    font-size: 55px;
    font-weight: 300;
    line-height: 66px;
    letter-spacing: 0.015em;
    text-align: center;
    margin-bottom: 60px;
  }

  &__project-container {
    display: grid;
    grid-template: repeat(3, 220px) / repeat(4, auto);
    column-gap: 20px;
    row-gap: 30px;
  }

  &__project-thumbnail {
    border: 1.5px solid black;

    &--one {
      grid-area: 1 / 1 / span 3 / span 1;
    }

    &--two {
      grid-area: 1 / 2 / span 1 / span 3;
    }

    &--three,
    &--four,
    &--five {
      grid-row: 2 / span 2;
    }
  }
}
</style>