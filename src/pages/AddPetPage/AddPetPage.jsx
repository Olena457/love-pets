import Title from '../../components/Title/Title.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import css from './AddPetPage.module.css';
import ContainerAdd from '../../components/ContainerAdd/ContainerAdd.jsx';

import addImageMobile1x from '../../assets/imgs/mobile/add-mob@1x.png';
import addImageMobile2x from '../../assets/imgs/mobile/add-mob@2x.png';
import addImageTablet1x from '../../assets/imgs/tablet/add-tablet@1x.png';
import addImageTablet2x from '../../assets/imgs/tablet/add-tablet@2x.png';
import addImageDesktop1x from '../../assets/imgs/desktop/add-desktop@1x.png';
import addImageDesktop2x from '../../assets/imgs/desktop/add-desktop@2x.png';

const LoginPage = () => {
  return (
    <div className={css.pageLogin}>
      <ContainerAdd
        images={{
          mobile1x: addImageMobile1x,
          mobile2x: addImageMobile2x,
          tablet1x: addImageTablet1x,
          tablet2x: addImageTablet2x,
          desktop1x: addImageDesktop1x,
          desktop2x: addImageDesktop2x,
        }}
      />
      <div className={css.containerLogin}>
        <div className={css.titleWrapper}>
          <Title title="add Pet" />
          <p className={css.description}>
            Welcome! Please enter your credentials to login to the platform:
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
