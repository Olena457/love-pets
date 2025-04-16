import css from './MainPage.module.css';
import { Link } from 'react-router';
const MainPage = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.containerLogo}>
        <Link to="/home" className="homeButton">
          <div className={css.logoMain}></div>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
