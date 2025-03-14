import css from './MainPage.module.css';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon.jsx';

const MainPage = () => {
  return (
    <div className={css.container}>
      <Link to="./home" className={css.logo}>
        <Icon id="icon-logo" className={css.logoMain} />
      </Link>
    </div>
  );
};

export default MainPage;
