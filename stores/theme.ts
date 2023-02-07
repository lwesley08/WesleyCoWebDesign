import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => {
    return { 
      currentTheme: "light",
      themes: {
        "light": "Classic Light",
        "dark": "Classic Dark"
      }
    }
  },
  actions: {
    setTheme(selectedTheme: string) {
      this.currentTheme = selectedTheme;
    }
  }
})