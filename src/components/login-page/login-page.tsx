import { FormEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { APPRoute, AuthorizationStatus } from '../../const';
import { setCurrentLogin } from '../../store/action';
import { loginAction } from '../../store/api-actoins';
import { getAuthorizationStatus } from '../../store/selectors';

function LoginPage(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(setCurrentLogin(emailRef.current.value));
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(APPRoute.Main, { replace: true });
    }
  }, [authorizationStatus, navigate]);

  return (
    <div className="login__container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>

        <form className="login__form" action="#" method="post" onSubmit={handleSubmit}>
          <div className="login__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input className="login__input" type="email" name="email" placeholder="Email" required  ref={emailRef}/>
          </div>
          <div className="login__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input className="login__input" type="password" name="password" placeholder="Password" required ref={passwordRef} />
          </div>
          <button className="login__submit button" type="submit">Sign in</button>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
