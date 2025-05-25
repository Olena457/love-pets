import { Link } from 'react-router';
import heartFull from '../../assets/icons/heartFull.svg';
import css from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.containerLogo}>
        <Link to="/" className={css.homeButton}>
          <div className={css.logoMain}>
            <div className={css.logoText}>
              Petl
              <img className={css.logoIcon} src={heartFull} alt="Heart Icon" />
              ve
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
