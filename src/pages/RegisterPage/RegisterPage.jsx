import Title from '../../components/Title/Title.jsx';
import ContainerImage from '../../components/ContainerImage/ContainerImage.jsx';
import RegisterForm from '../../components/RegisterForm/RegisterForm.jsx';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const registerImages = {
    mobile1x: '../../img/register-mobile@1x.jpg',
    mobile2x: '../../img/register-mobile@2x.jpg',
    tablet1x: '../../img/register-tablet@1x.jpg',
    tablet2x: '../../img/register-tablet@2x.jpg',
    desktop1x: '../../img/register-desktop@1x.jpg',
    desktop2x: '../../img/register-desktop@2x.jpg',
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
