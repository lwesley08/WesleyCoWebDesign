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
    box-shadow: 6px 6px 5px #aaaaaa;
    width: 60px;
    height: 60px;
    background: black;

    &--animated {
      box-shadow: 0px 0px 0px #aaaaaa;
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
    box-shadow: 6px 6px 5px #aaaaaa;
    border-radius: 5px;
    padding: 20px 0px;
    display: none;

    &--open {
      display: initial;
      animation: animate-fade-in .75s linear .25s 1 backwards;
    }

    &--closing {
      animation: animate-fade-out .75s linear 1 backwards;
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

  @keyframes pulse {
    to {
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }

  @keyframes animate-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  
  @keyframes animate-fade-out {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
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