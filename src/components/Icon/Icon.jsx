import sprite from '../../assets/icons/sprite.svg';

const Icon = ({
  id,
  width = 24,
  height = 24,
  className = '',
  fillColor = 'currentColor',
  strokeColor = 'currentColor',
  style = {},
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={fillColor}
      stroke={strokeColor}
      style={style}
    >
      <use href={`${sprite}#icon-${id}`} />
    </svg>
  );
};

export default Icon;
