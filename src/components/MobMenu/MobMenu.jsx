import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import whiteCross from '../../assets/icons/whiteCross.svg';
import blackCross from '../../assets/icons/blackCross.svg';
import { closeMobMenu } from '../../redux/mobile/mobMenuSlice';
import css from './MobMenu.module.css';

export const MobMenu = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // Перевіряємо, чи це сторінка /home
  const isHomePage = location.pathname === '/home';

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        dispatch(closeMobMenu());
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  const handleOverlayClick = evt => {
    if (evt.target === evt.currentTarget) {
      dispatch(closeMobMenu());
    }
  };

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={`${css.menu} ${isHomePage ? css.whiteBg : css.yellowBg}`}>
        <button
          className={css.closeBtn}
          onClick={() => dispatch(closeMobMenu())}
        >
          <img
            src={isHomePage ? blackCross : whiteCross}
            alt={isHomePage ? 'close menu (black)' : 'close menu (white)'}
            className={css.closeIcon}
          />
        </button>
        <div className={css.navigationMenu}>
          <a
            href="/news"
            className={`${css.navLink} ${
              isHomePage ? css.homeBtn : css.yellowBtn
            }`}
          >
            News
          </a>
          <a
            href="/notices"
            className={`${css.navLink} ${
              isHomePage ? css.homeBtn : css.yellowBtn
            }`}
          >
            Find pet
          </a>
          <a
            href="/our-friends"
            className={`${css.navLink} ${
              isHomePage ? css.homeBtn : css.yellowBtn
            }`}
          >
            Our friends
          </a>
        </div>
        <div className={css.menuList}>
          <button className={`${css.authButton} ${css.loginBtn}`}>
            LOG IN
          </button>
          <button className={`${css.authButton} ${css.registerBtn}`}>
            REGISTRATION
          </button>
        </div>
      </div>
    </div>
  );
};
