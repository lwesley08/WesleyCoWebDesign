<template>
  <div class="footer">
    <div class="footer__content-container">
      <h3 class="footer__cta-text">Interested in working together? Let’s Chat!</h3>
      <button class="footer__cta">Get In Touch</button>
    </div>
    <div class="footer__copyright">
      <p>Copyright Wesley & Co. 2023</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  min-height: 415px;
  box-sizing: border-box;
  width: 100%;
  padding: 80px 80px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__cta-text {
    font-family: Raleway;
    font-size: 42px;
    font-weight: 300;
    line-height: 50px;
    letter-spacing: 0.015em;
    margin: 0px;
  }

  &__cta {
    width: 400px;
    margin-top: 30px;
    padding-top: 14px;
    padding-bottom: 19px;
    border-radius: 0px;
    font-family: Raleway;
    font-size: 23px;
    font-weight: 300;
    line-height: 27px;
    letter-spacing: 0em;
    color: $falling-petals;
    background: black;
    border: 1.5px solid $falling-petals;
    box-shadow: 6px 6px 0px 0px #000000;
  }

  &__copyright {
    font-family: Raleway;
    font-size: 18px;
    font-weight: 300;
    line-height: 29px;
    letter-spacing: 0.015em;
  }
}
</style>