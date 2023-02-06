<template>
  <div class="footer">
    <div class="footer__content-container">
      <h3 class="footer__cta-text">Interested in working together? Let’s Chat!</h3>
      <a href="mailto:lwesley@proton.me"><button class="footer__cta">Get In Touch</button></a>
    </div>
    <div class="footer__copyright">
      <p>Copyright Wesley & Co. 2023</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  @include contentContainer;
  min-height: 415px;
  padding-top: 40px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include tabletAndAbove {
    padding-top: 60px;
  }

  @include laptopAndAbove {
    padding-top: 80px;
  }

  &__content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__cta-text {
    font-family: Raleway;
    font-weight: 300;
    letter-spacing: 0.015em;
    font-size: 30px;
    line-height: 40px;
    text-align: center;

    @include themify() {
      color: themed("text-color-primary");
    }

    @include tabletAndAbove {
      font-size: 42px;
      line-height: 50px;
    }
  }

  &__cta {
    width: 100%;
    margin-top: 30px;
    padding-top: 14px;
    padding-bottom: 19px;
    border-radius: 0px;
    font-family: Raleway;
    font-size: 23px;
    font-weight: 300;
    line-height: 27px;
    letter-spacing: 0em;
    background: black;
    border: 1.5px solid $falling-petals;
    box-shadow: 6px 6px 0px 0px #000000;
    cursor: pointer;

    @include tabletAndAbove {
      width: 400px;
    }

    @include themify() {
      color: themed("text-color-secondary");
    }
  }

  &__copyright {
    font-family: Raleway;
    font-size: 18px;
    font-weight: 300;
    line-height: 29px;
    letter-spacing: 0.015em;
    text-align: center;

    @include themify() {
      color: themed("text-color-primary");
    }

    @include laptopAndAbove {
      text-align: left;
    }
  }
}
</style>