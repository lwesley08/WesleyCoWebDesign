<template>
  <div class="portfolio" id="portfolio">
    <h3 class="portfolio__title">Past Work</h3>
    <div class="portfolio__project-container">
      <div class="portfolio__project-thumbnail portfolio__project-thumbnail--one">
        <p class="portfolio__project-learn-more">
          <span class="mdi mdi-shimmer"></span>
          Learn More
        </p>
      </div>
      <div class="portfolio__project-thumbnail portfolio__project-thumbnail--two">
        <p class="portfolio__project-learn-more">
          <span class="mdi mdi-shimmer"></span>
          Learn More
        </p>
      </div>
      <div class="portfolio__project-thumbnail portfolio__project-thumbnail--three">
        <p class="portfolio__project-learn-more">
          <span class="mdi mdi-shimmer"></span>
          Learn More
        </p>
      </div>
      <div class="portfolio__project-thumbnail portfolio__project-thumbnail--four">
        <p class="portfolio__project-learn-more">
          <span class="mdi mdi-shimmer"></span>
          Learn More
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio {
  @include contentContainer;
  min-height: 900px;
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
    grid-template-rows: repeat(4, 300px);
    row-gap: 20px;

    @include laptopAndAbove {
      grid-template: repeat(3, 220px) / repeat(3, auto);
      column-gap: 20px;
      row-gap: 30px;
    }
  }

  &__project-learn-more {
    visibility: hidden;

    .portfolio__project-thumbnail:hover & {
      visibility: visible;
    }
  }

  &__project-thumbnail {
    @include themify() {
      border: themed("section-border")
    }

    display: flex;
    align-items: center;
    justify-content: center;

    @include themify() {
      color: themed("text-color-secondary");
      font-size: 30px;
      font-family: Raleway;
    }

    &--one {
      @include backgroundImage("../public/Conference.png");

      @include laptopAndAbove {
        grid-area: 1 / 1 / span 3 / span 2;
      }
    }

    &--two {
      @include backgroundImage("../public/Mendio.png");

      @include laptopAndAbove {
        grid-area: 1 / 3 / span 1 / span 2;
      }
    }

    &--three {
      @include backgroundImage("../public/TSDMobile.png");
    }

    &--four {
      @include backgroundImage("../public/DemoDispensary.png");
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