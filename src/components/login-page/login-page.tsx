function LoginPage(): JSX.Element {
  return (
    <div className="login__container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>

        <form className="login__form" action="#" method="post">
          <div className="login__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input className="login__input" type="email" name="email" placeholder="Email" required />
          </div>
          <div className="login__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input className="login__input" type="password" name="password" placeholder="Password" required />
          </div>
          <button className="login__submit button" type="submit">Sign in</button>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
