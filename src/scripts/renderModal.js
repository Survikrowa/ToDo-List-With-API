export const renderRegister = () => {
  return `
  <section class="modal__section">
  <h2>Register</h2>
    <form class="form">
      <div class="form__input-container">
        <label for="register-login-input">Enter your login here:</label>
        <input
          class="form__input"
          type="text"
          name="register-login-input"
          id="register-login-input"
        />
      </div>
      <div class="form__input-container">
        <label for="register-email-input">Enter your email here:</label>
        <input
          class="form__input"
          type="email"
          name="register-email-input"
          id="register-email-input"
        />
      </div>
      <div class="form__input-container">
        <label for="register-password-input">Enter your password here:</label>
        <input
          class="form__input"
          type="password"
          name="register-password-input"
          id="register-password-input"
        />
      </div>
      <button type="button" class="btn btn__primary" value="login-btn" id="js-Go-login">
      Go to login
      </button>
      <button
        class="btn btn__primary btn__primary-register"
        type="submit"
        value="confirm-register-btn"
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
  <form class="form">
    <div class="form__input-container">
      <label for="login-input">Enter your login here:</label>
      <input
        class="form__input"
        type="text"
        name="login-input"
        id="login-input"
      />
    </div>
    <div class="form__input-container">
      <label for="password-input">Enter your password here:</label>
      <input
        class="form__input"
        type="password"
        name="password-input"
        id="email-input"
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
    <button
      class="btn btn__primary btn__primary-register"
      type="submit"
      value="confirm-login-btn"
    >
      Log in
    </button>
  </form>
  <button type="button" class="close-btn-container" value="close-btn">
    <img id="close-btn" src="/close-icon.a7050b64.svg" />
  </button>
</section>`;
};
