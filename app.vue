<template>
  <div class="theme-light">
    <Header />
    <Hero />
    <AboutMe />
    <PastWork />
    <Footer />
  </div>
</template>

<style lang="scss">
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
