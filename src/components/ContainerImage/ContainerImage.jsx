import { useLocation } from 'react-router-dom';
import css from './ContainerImage.module.css';

const ContainerImage = ({ images }) => {
  const location = useLocation();
  const type = location.pathname.includes('register') ? 'register' : 'login';
  return (
    <div className={css.petContainer}>
      <img
        src={images.desck1x}
        srcSet={`
          ${images.mobile1x} 1x, ${images.mobile2x} 2x,
          ${images.tablet1x} 768w, ${images.tablet2x} 768w,
          ${images.desktop1x} 1280w, ${images.desktop2x} 1280w
        `}
        sizes="(min-width: 1280px) 1280px, 
               (min-width: 768px) 768px, 
               100vw"
        alt="Pet representation"
        className={css.petImage}
      />
      {type === 'register' && <div className={css.blockCat}></div>}
      {type === 'login' && <div className={css.blockDog}></div>}
    </div>
  );
};

export default ContainerImage;
