import css from './Stars.css';
import Icon from '../Icon/Icon.jsx';

export const Stars = ({ popularity }) => {
  const oneStar = 500;
  const totalStars = 5;
  const startsToShow =
    popularity < oneStar
      ? 1
      : Math.min(Math.floor(popularity / oneStar), totalStars);

  let stars = [];

  // added yellow stars
  for (let i = 0; i < startsToShow; i++) {
    stars.push(
      <Icon
        key={i}
        icon="star"
        color="yellow"
        width="16"
        height="16"
        className={css.yellowItem}
      />
    );
  }

  // added grey stars
  for (let i = startsToShow; i < totalStars; i++) {
    stars.push(
      <Icon
        key={i}
        icon="star"
        color="grey"
        width="16"
        height="16"
        className={css.grayItem}
      />
    );
  }

  return <div className={css.popularityList}>{stars}</div>;
};
