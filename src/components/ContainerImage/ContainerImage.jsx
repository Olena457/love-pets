import css from './ImageContainer.module.css';

const ContainerImage = ({ images }) => {
  return (
    <div className={css.petContainer}>
      <img
        src={images.mobile1x}
        srcSet={`
          ${images.mobile1x} 320w,
          ${images.mobile2x} 320w,
          ${images.tablet1x} 768w,
          ${images.tablet2x} 768w,
          ${images.desktop1x} 1280w,
          ${images.desktop2x} 1280w
        `}
        sizes="(min-width: 1280px) 1280px, 
               (min-width: 768px) 768px, 
               320px"
        alt="Pet"
        className={css.petImage}
      />
    </div>
  );
};

export default ContainerImage;
