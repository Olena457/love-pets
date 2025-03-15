import Title from '../../components/Title/Title.jsx';
import ContainerImage from '../../components/ContainerImage/ContainerImage.jsx';
// import AddForm from '../../components/AddForm/AddForm.jsx';
import css from './AddPetPage.module.css';

const AddPetPage = () => {
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
          <Title title=" Add my pet/<span className={css.smallTitle}>personal details</span>" />
        </div>
        {/* <AddForm /> */}
      </div>
    </div>
  );
};

export default AddPetPage;
