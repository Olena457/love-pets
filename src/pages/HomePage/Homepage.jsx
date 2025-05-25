import ContainerPage from '../../components/ContainerPage/ContainerPage.jsx';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <ContainerPage>
      <div className={css.wrapper}>
        <div className={css.home}>
          <div className={css.content}>
            <h1 className={css.title}>
              Take good<span className={css.light}>care</span> of your small
              pets
            </h1>
            <p className={css.description}>
              Choosing a pet for your home is a choice that is meant to enrich
              your life with immeasurable joy and tenderness.
            </p>
          </div>
        </div>
        <div className={css.photo}></div>
      </div>
    </ContainerPage>
  );
};

export default HomePage;
