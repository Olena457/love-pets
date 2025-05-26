import ConainerPage from '../../components/ContainerPage/ContainerPage.jsx';
import ContainerImage from '../../components/ContainerImage/ContainerImage.jsx';
import Title from '../../components/Title/Title.jsx';
import RegisterForm from '../../components/RegisterForm/RegisterForm.jsx';
import catImageMobile1x from '../../assets/imgs/mobile/register-mob@1x.png';
import catImageMobile2x from '../../assets/imgs/mobile/register-mob@2x.png';
import catImageTablet1x from '../../assets/imgs/tablet/register-tablet@1x.png';
import catImageTablet2x from '../../assets/imgs/tablet/register-tablet@2x.png';
import catImageDesktop1x from '../../assets/imgs/desktop/register-desk@1x.png';
import catImageDesktop2x from '../../assets/imgs/desktop/register-desk@2x.png';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <ConainerPage>
      <div className={css.pageRegister}>
        <ContainerImage
          images={{
            mobile1x: catImageMobile1x,
            mobile2x: catImageMobile2x,
            tablet1x: catImageTablet1x,
            tablet2x: catImageTablet2x,
            desktop1x: catImageDesktop1x,
            desktop2x: catImageDesktop2x,
          }}
        />
        <div className={css.container}>
          <div className={css.titleContainer}>
            <Title title="Register" />
            <p className={css.description}>
              Thank you for your interest in our platform.
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </ConainerPage>
  );
};

export default RegisterPage;
