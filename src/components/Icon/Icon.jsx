import sprite from '../../assets/imgs/sprite.svg';

const Icon = ({ id, width, height, className = '', fillColor }) => {
  return (
    <svg
      className={`${className}`}
      // style={{ background: "transparent" }}
      width={width}
      height={height}
    >
      <use style={{ fill: `${fillColor}` }} href={`${sprite}#icon-${id}`}></use>
    </svg>
  );
};

export default Icon;
