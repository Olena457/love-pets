import css from './MainPage.module.css';
import { Link } from 'react-router';
import heartFull from '../../assets/icons/heartFull.svg';
const MainPage = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.containerLogo}>
        <Link to="/home" className={css.homeButton}>
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
