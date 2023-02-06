<template>
  <div class="portfolio" id="portfolio">
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
  @include contentContainer;
  min-height: 1000px;
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: solid black 1.5px;

  @include tabletAndAbove {
    padding-bottom: 60px;
    padding-top: 60px;
  }

  @include laptopAndAbove {
    padding-bottom: 80px;
    padding-top: 80px;
  }

  &__title {
    font-family: Raleway;
    font-weight: 300;
    letter-spacing: 0.015em;
    text-align: center;
    margin-bottom: 30px;
    font-size: 35px;
    line-height: 48px;

    @include tabletAndAbove {
      font-size: 55px;
      line-height: 66px;
      margin-bottom: 60px;
    }
  }

  &__project-container {
    display: grid;
    grid-template-rows: repeat(5, 300px);
    row-gap: 20px;

    @include tabletAndAbove {
      grid-template: repeat(3, 220px) / repeat(4, auto);
      column-gap: 20px;
      row-gap: 30px;
    }
  }

  &__project-thumbnail {
    border: 1.5px solid black;

    &--one {
      @include tabletAndAbove {
        grid-area: 1 / 1 / span 3 / span 1;
      }
    }

    &--two {
      @include tabletAndAbove {
        grid-area: 1 / 2 / span 1 / span 3;
      }
    }

    &--three,
    &--four,
    &--five {
      @include tabletAndAbove {
        grid-row: 2 / span 2;
      }
    }
  }
}
</style>