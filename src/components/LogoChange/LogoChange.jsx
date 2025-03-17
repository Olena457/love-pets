import Icon from '../Icon/Icon.jsx';
import css from './LogoChange.module.css';
import { Link } from 'react-router-dom';

const LogoChange = ({ isHomePage }) => {
  return (
    <div className={`${css.nav} ${isHomePage ? css.homeNav : ''}`}>
      <div className={css.container}>
        <div className={css.headerNav}>
          <Link to="/home">
            <Icon
              width={79}
              height={20}
              id={isHomePage ? 'logo-white' : 'logo'}
              className={css.logoChange}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogoChange;
