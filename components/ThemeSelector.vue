<template>
  <div class="theme__container">
    <div class="theme__selector" :class="{ 'theme__selector--open': isOpen, 'theme__selector--closing': isClosing }">
      <div class="theme__option" :class="{ 'theme__option--selected': currentTheme == key }"
        v-for="(key, theme) in themes" @click="selectTheme(key)">
        <p><span class="theme__option-icon mdi mdi-shimmer"></span>&nbsp;{{ theme }}</p>
      </div>
    </div>
    <div class="theme__fab" @click="openThemeSelector">
      <i class="theme__fab-icon mdi mdi-shimmer"></i>
    </div>
  </div>
</template>
<style lang="scss">
.theme {
  &__container {
    position: fixed;
    bottom: 30px;
    right: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__fab {
    border-radius: 100%;
    box-shadow: 6px 6px 5px rgba(16, 27, 79, 0.19);
    width: 60px;
    height: 60px;
    background: black;

    &--animated {
      box-shadow: 0px 0px 0px rgba(16, 27, 79, 0.19);
      animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    }
  }

  &__fab-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: $falling-petals;
    font-size: 25px;
  }

  &__selector {
    color: $falling-petals;
    background-color: black;
    margin-bottom: 10px;
    min-height: 80px;
    min-width: 120px;
    box-shadow: 6px 6px 5px rgba(16, 27, 79, 0.19);
    border-radius: 5px;
    padding: 20px 0px;
    display: none;

    &--open {
      display: initial;
      animation: fadeIn .75s linear .25s 1 backwards;
    }

    &--closing {
      animation: fadeOut .75s linear 1 backwards;
      display: initial;
      opacity: 0;
    }
  }

  &__option {
    font-family: Raleway;
    padding: 5px 20px 5px 5px;
    border-bottom: 1px solid $falling-petals;
  }

  &__option-icon {
    color: $falling-petals;
    font-size: 18px;
    opacity: 0;
    transition: opacity 500ms;

    .theme__option--selected & {
      opacity: 100;
    }
  }
}
</style>
<script lang="ts" setup>
import { useThemeStore } from '../stores/theme';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const { currentTheme, themes } = storeToRefs(themeStore);
let isOpen = ref(false);
let isClosing = ref(false);

function selectTheme(key: string) {
  currentTheme.value = key;
  isOpen.value = false;
}

function openThemeSelector() {
  isOpen.value = !isOpen.value;
  if(!isOpen.value) {
    isClosing.value = true;
  } else {
    isClosing.value = false;
  }
  setTimeout(() => {
    isClosing.value = false;
  }, 1000)
}
</script>