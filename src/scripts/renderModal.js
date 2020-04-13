export const renderRegister = () => {
  return `
  <section class="modal__section">
  <h2>Register</h2>
    <form class="form" id="js-form" action="" method="post">
        <div class="form__input-container">
        <label for="register-firstName-input">Enter your first name here:</label>
        <input
          class="form__input"
          type="text"
          name="register"
          id="register-firstName-input"
          required=""
        />
      </div>
      <div class="form__input-container">
        <label for="register-lastName-input">Enter your last name here:</label>
        <input
          class="form__input"
          type="text"
          name="register"
          id="register-lastName-input"
          required=""
        />
      </div>
      <div class="form__input-container">
        <label for="register-login-input">Enter your login here:</label>
        <input
          class="form__input"
          type="text"
          name="register"
          id="register-login-input"
          required=""
        />
      </div>
      <div class="form__input-container">
        <label for="register-email-input">Enter your email here:</label>
        <input
          class="form__input"
          type="email"
          name="register"
          id="register-email-input"
          required=""
        />
      </div>
      <div class="form__input-container">
        <label for="register-password-input">Enter your password here:</label>
        <input
          class="form__input"
          type="password"
          name="register"
          id="register-password-input"
          required=""
        />
      </div>
      <button type="button" class="btn btn__primary" value="login-btn" id="js-Go-login">
      Go to login
      </button>
      <button
        class="btn btn__primary btn__primary-register"
        type="button"
        id="confirm-register-btn"
      >
        Register
      </button>
    </form>
    <button type="button" class="close-btn-container" value="close-btn">
      <img id="close-btn" src="/close-icon.a7050b64.svg" />
    </button>
    </section>`;
};

export const renderLogin = () => {
  return `<section class="modal__section">
  <h2>Login</h2>
  <form class="form" id="js-form" action="" method="post">
    <div class="form__input-container">
      <label for="login-input">Enter your login here:</label>
      <input
        class="form__input"
        type="text"
        name="login-input"
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
    <img id="close-btn" src="/close-icon.a7050b64.svg" />
  </button>
</section>`;
};
