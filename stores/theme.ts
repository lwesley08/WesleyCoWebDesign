import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => {
    return { 
      currentTheme: "light",
      themes: {
        "Classic Light": "light",
        "Classic Dark": "dark"
      }
    }
  },
  actions: {
    setTheme(selectedTheme: string) {
      this.currentTheme = selectedTheme;
    }
  }
})