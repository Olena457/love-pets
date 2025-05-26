import starYellow from '../../assets/icons/starYellow.svg';
import starGray from '../../assets/icons/starGray.svg';
import css from './Stars.module.css';

export const Stars = ({ popularity }) => {
  const oneStar = 500;
  const totalStars = 5;
  const startsToShow =
    popularity < oneStar
      ? 1
      : Math.min(Math.floor(popularity / oneStar), totalStars);

  let stars = [];

  // __________ yellow stars
  for (let i = 0; i < startsToShow; i++) {
    stars.push(
      <img
        key={i}
        src={starYellow}
        color="yellow"
        width="16"
        height="16"
        className={css.yellowItem}
      />
    );
  }

  //___________ gray stars
  for (let i = startsToShow; i < totalStars; i++) {
    stars.push(
      <img
        key={i}
        src={starGray}
        color="gray"
        width="16"
        height="16"
        className={css.yellowItem}
      />
    );
  }

  return <div className={css.popularityList}>{stars}</div>;
};
