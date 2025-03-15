import Title from '../../components/Title/Title.jsx';
import ContainerImage from '../../components/ContainerImage/ContainerImage.jsx';
import RegisterForm from '../../components/RegisterForm/RegisterForm.jsx';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const registerImages = {
    mobile1x: '../../assets/imgs/mobile/register-mob@1x.png',
    mobile2x: '../../assets/imgs/mobile/register-mob@2x.png',
    tablet1x: '../../assets/imgs/tablet/register-tablet@1x.png',
    tablet2x: '../../assets/imgs/tablet/register-tablet@2x.png',
    desktop1x: '../../assets/imgs/desktop/register-desk@1x.png',
    desktop2x: '../../assets/imgs/desktop/register-desk@2x.png',
  };

  return (
    <div className={css.pageRegister}>
      <ContainerImage images={registerImages} />
      <div className={css.container}>
        <div className={css.titleContainer}>
          <Title title="Register" />
          <p className={css.description}>
            Thank you for your interest in our platform.
          </p>
        </div>
        <RegisterForm />
        <p className={css.footerDescription}>
          Already have an account?<a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
