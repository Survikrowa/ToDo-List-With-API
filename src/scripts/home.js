export const home = `
<dialog id="js-modal" class="modal">
<section class="modal__section">
  <h2>Login</h2>
  <form class="form" id="js-form">
    <div class="form__input-container">
      <label for="login-input">Enter your login here:</label>
      <input
        class="form__input"
        type="text"
        name="login"
        id="login-input"
        required=""
      />
    </div>
    <div class="form__input-container">
      <label for="password-input">Enter your password here:</label>
      <input
        class="form__input"
        type="password"
        name="password"
        id="email-input"
        required=""
      />
    </div>
    <button
      type="button"
      class="btn btn__primary"
      value="register-btn"
      id="js-Go-register"
    >
      Go to register
    </button>
    <a
      class="btn btn__primary btn__primary-register"
      id="confirm-login-btn"
      href="#"
    >
      Log in
    </a>
  </form>
  <button type="button" class="close-btn-container" value="close-btn">
    <img id="close-btn" src="/close-icon.a7050b64.svg" /></button
  >
</section>
</dialog>
<header class="header">
<h1 class="header__h1">
  <span>Cow-Do List</span
  ><img class="header__logo" src="/logo.7eb0dfff.png" />
</h1>
</header>
<main>
<section class="intro-section">
  <img
    class="intro-section__image"
    src="/undraw_next_tasks_iubr.ad7245c0.svg"
  />
</section>
<section class="about-us">
  <article>
    <h2>ABOUT US</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      pellentesque volutpat ante, sit amet rutrum urna feugiat in. Aenean
      suscipit nunc finibus metus dignissim elementum. Integer
      sollicitudin hendrerit sollicitudin. Nunc tempor, quam in sodales
      aliquam, ipsum dui ultrices odio, commodo volutpat mauris tellus
      quis metus. Ut eleifend, ligula eget ornare rhoncus, enim tellus
      consectetur purus, a ultricies orci mi vel lacus
    </p>
  </article>
</section>
<section class="join-us">
  <button class="btn btn__primary" type="button" id="js-turn-modal">
    Join Us!
  </button>
</section>
</main>
`;
