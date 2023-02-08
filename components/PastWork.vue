<template>
  <div class="portfolio" id="portfolio">
    <h3 class="portfolio__title">Past Work</h3>
    <div class="portfolio__project-container">
      <div class="portfolio__project-thumbnail portfolio__project-thumbnail--one">

      </div>
      <div class="portfolio__project-thumbnail portfolio__project-thumbnail--two">
        Meditation App Landing Page
        Learn More
      </div>
      <div class="portfolio__project-thumbnail portfolio__project-thumbnail--three">

      </div>
      <div class="portfolio__project-thumbnail portfolio__project-thumbnail--four"></div>
      <!-- <div class="portfolio__project-thumbnail portfolio__project-thumbnail--five"></div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio {
  @include contentContainer;
  min-height: 1000px;
  padding-top: 40px;
  padding-bottom: 40px;

  @include themify() {
    border-bottom: themed("section-border");
  }

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

    @include themify() {
      color: themed("text-color-primary");
    }

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

    @include laptopAndAbove {
      grid-template: repeat(3, 220px) / repeat(3, auto);
      column-gap: 20px;
      row-gap: 30px;
    }
  }

  &__project-thumbnail {
    @include themify() {
      border: themed("section-border")
    }



    &--one {
      background-image: url("../public/Conference.png");
      background-size: 100%;

      @include laptopAndAbove {
        grid-area: 1 / 1 / span 3 / span 2;
      }

      &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("../public/Conference.png");
      }
    }

    &--two {
      background: url("../public/Mendio.png");
      background-size: 100%;

      @include laptopAndAbove {
        grid-area: 1 / 3 / span 1 / span 2;
      }

      &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("../public/Mendio.png");
      }
    }
    
    &--three {
      background: url("../public/TSDMobile.png");
      background-size: 100%;

      &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("../public/TSDMobile.png");
      }
    }
    
    &--four {
      background: url("../public/DemoDispensary.png");
      background-size: 100%;

      &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("../public/DemoDispensary.png");
      }
    }

    &--three,
    &--four {
      @include laptopAndAbove {
        grid-row: 2 / span 2;
      }
    }
  }
}
</style>