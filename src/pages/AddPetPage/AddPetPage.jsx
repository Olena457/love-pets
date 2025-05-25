import AddPetForm from '../../components/AddPetForm/AddPetForm.jsx';
import ContainerAdd from '../../components/ContainerAdd/ContainerAdd.jsx';
import css from './AddPetPage.module.css';

import addImageMobile1x from '../../assets/imgs/mobile/add-mob@1x.png';
import addImageMobile2x from '../../assets/imgs/mobile/add-mob@2x.png';
import addImageTablet1x from '../../assets/imgs/tablet/add-tablet@1x.png';
import addImageTablet2x from '../../assets/imgs/tablet/add-tablet@2x.png';
import addImageDesktop1x from '../../assets/imgs/desktop/add-desktop@1x.png';
import addImageDesktop2x from '../../assets/imgs/desktop/add-desktop@2x.png';

const LoginPage = () => {
  return (
    <div className={css.pageAdd}>
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
      <div className={css.containerAdd}>
        <AddPetForm />
      </div>
    </div>
  );
};

export default LoginPage;
