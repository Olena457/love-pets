import Title from '../../components/Title/Title.jsx';
import ContainerImage from '../../components/ContainerImage/ContainerImage.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const loginImages = {
    mobile1x: '../../assets/imgs/mobile/login-mob@1x.png',
    mobile2x: '../../assets/imgs/mobile/login-mob@2x.png',
    tablet1x: '../../assets/imgs/tablet/login-tablet@1x.png',
    tablet2x: '../../assets/imgs/tablet/login-tablet@2x.png',
    desktop1x: '../../assets/imgs/desktop/login-desk@1x.png',
    desktop2x: '../../assets/imgs/desktop/login-desk@2x.png',
  };

  return (
    <div className={css.pageLogin}>
      <ContainerImage images={loginImages} />
      <div className={css.container}>
        <div className={css.titleContainer}>
          <Title title="Login" />
          <p className={css.description}>
            Thank you for your interest in our platform.
          </p>
        </div>
        <LoginForm />
        <p className={css.footerDescription}>
          Do not have an account?<a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
