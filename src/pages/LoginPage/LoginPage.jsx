import Title from '../../components/Title/Title.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import css from './LoginPage.module.css';
import ContainerImage from '../../components/ContainerImage/ContainerImage.jsx';

import dogImageMobile1x from '../../assets/imgs/mobile/login-mob@1x.png';
import dogImageMobile2x from '../../assets/imgs/mobile/login-mob@2x.png';
import dogImageTablet1x from '../../assets/imgs/tablet/login-tablet@1x.png';
import dogImageTablet2x from '../../assets/imgs/tablet/login-tablet@2x.png';
import dogImageDesktop1x from '../../assets/imgs/desktop/login-desk@1x.png';
import dogImageDesktop2x from '../../assets/imgs/desktop/login-desk@2x.png';

const LoginPage = () => {
  return (
    <div className={css.loginPage}>
      <ContainerImage
        images={{
          mobile1x: dogImageMobile1x,
          mobile2x: dogImageMobile2x,
          tablet1x: dogImageTablet1x,
          tablet2x: dogImageTablet2x,
          desktop1x: dogImageDesktop1x,
          desktop2x: dogImageDesktop2x,
        }}
      />
      <div className={css.container}>
        <div className={css.titleWrapper}>
          <Title title="Login" />
          <p className={css.text}>
            Welcome! Please enter your credentials to login to the platform:
          </p>
        </div>
        <LoginForm />
        <p className={css.footerText}>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
