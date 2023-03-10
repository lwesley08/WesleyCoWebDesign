<template>
  <div class="hero">
    <div class="hero__text-container">
      <h2 class="hero__title">Modern Designs with a <span class="hero__title--accent">Classic Flair</span></h2>
      <div class="hero__cta-container">
        <a href="#portfolio"><button class="hero__cta hero__cta--portfolio">Past Work</button></a>
        <a href="mailto:libertywesley@proton.me"><button class="hero__cta hero__cta--contact">Get In Touch</button></a>
      </div>
    </div>
    <div class="hero__image-container">
      <img class="hero__image" :src="heroImage" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  @include contentContainer;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  padding-top: 40px;
  gap: 20px;

  @include tabletAndAbove {
    padding-bottom: 60px;
    padding-top: 60px;
  }

  @include laptopAndAbove {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 80px;
    padding-top: 80px;
  }

  &__text-container {
    text-align: center;
    max-width: 483px;

    @include laptopAndAbove {
      text-align: left;
    }
  }

  &__title {
    font-family: 'Raleway';
    font-weight: 300;
    font-size: 30px;
    line-height: 45px;
    letter-spacing: 0.125em;
    margin-bottom: 30px;

    @include themify() {
      color: themed("text-color-primary");
    }

    @include tabletAndAbove {
      font-size: 45px;
      line-height: 61px;
      margin-bottom: 50px;
    }

    &--accent {
      display: inline-block;
      font-family: Tangerine;
      font-weight: 400;
      line-height: 61px;
      letter-spacing: 0.125em;
      font-size: 40px;

      @include tabletAndAbove {
        font-size: 61px;
        line-height: 61px;
        transform: translateY(8px);
      }

      @include themify() {
        animation: themed("accent-text-animation");
      }

    }
  }

  &__cta {
    width: 100%;
    padding-top: 14px;
    padding-bottom: 19px;
    font-family: Raleway;
    font-size: 23px;
    font-weight: 300;
    line-height: 27px;
    cursor: pointer;

    @include buttonAnimation();

    @include themify() {
      border-radius: themed("button-border-radius");
    }

    @include tabletAndAbove {
      width: 213px;
    }

    &--portfolio {
      margin-bottom: 20px;

      @include themify() {
        color: themed("text-color-primary");
        background: themed("button-secondary-background");
        border: themed("button-secondary-border");
        box-shadow: themed("button-box-shadow");

        &:hover {
          background: darken(themed("button-secondary-background"), 8%);
        }
      }

      @include tabletAndAbove {
        margin-right: 30px;
      }
    }

    &--contact {
      @include themify() {
        color: themed("text-color-secondary");
        background: themed("button-primary-background");
        border: themed("button-primary-border");
        box-shadow: themed("button-box-shadow");

        &:hover {
          background: lighten(themed("button-primary-background"), 14%);
        }
      }
    }
  }

  &__image {
    max-width: 100%;

    @mixin laptopAndAbove() {
      animation: fadeInRight 1000ms 200ms both;
    }
  }
}
</style>

<script lang="ts" setup>
import { useThemeStore } from '../stores/theme';
import { storeToRefs } from 'pinia';
import { ComputedRef } from 'vue';

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);

const heroImage: ComputedRef<string> = computed(() => {
  switch (currentTheme.value) {
    case 'glow':
      return './GlowingLaptop.png';
    default:
      return './HeroImage.png';
  }
})

</script>

