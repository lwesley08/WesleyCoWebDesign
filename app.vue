<template>
  <div :class="themeClass">
    <Header />
    <Hero />
    <AboutMe />
    <PastWork />
    <Footer />
    <ThemeSelector/>
  </div>
</template>

<style lang="scss">
* {
  transition: color 2000ms, background-color 2000ms;
}
body {
  margin: 0;

  @include themify() {
    background-color: themed("background-color-primary");
  }
}

body,
html {
  height: 100%;
  width: 100%;
}

h2,
h3,
p {
  margin: 0px;
}

a {
  color: unset;
  text-decoration: none;
}
</style>

<script lang="ts" setup>
import { useThemeStore } from './stores/theme';
import { storeToRefs } from 'pinia';
import { ComputedRef } from 'vue';

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);

const themeClass: ComputedRef<string> = computed(() => `theme-${currentTheme.value}`);
</script>
