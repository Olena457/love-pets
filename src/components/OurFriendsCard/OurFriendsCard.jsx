import css from './OurFriendsCard.module.css';

const OurFriendsCard = ({ friend }) => {
  const workDays = friend.workDays || [];
  const openDays = workDays.filter(day => day.isOpen);
  const workHours =
    openDays.length > 0
      ? `${openDays[0].from} - ${openDays[0].to}`
      : 'Open day and night';

  return (
    <div className={css.wrapperFriends}>
      <div className={css.hourTime}>
        {workDays.length === 0 ? 'Day and night' : workHours}
      </div>
      <div className={css.wrapperImage}>
        <img src={friend.imageUrl} alt={friend.title || 'Friend image'} />
      </div>
      <div className={css.titleName}> {friend.title}</div>

      <ul>
        <li className={css.descripnsonList}>
          <p className={css.descriptionText} href={`mailto:${friend.email}`}>
            <span className={css.accentText}>Email:</span>
            {friend.email || 'website only'}
          </p>
          <a
            className={css.descriptionText}
            href={`https://www.google.com/maps?q=${encodeURIComponent(
              friend.address || ''
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={css.accentText}>Address:</span>
            {friend.address || 'website only'}
          </a>
          <p className={css.descriptionText} href={`tel:${friend.phone}`}>
            <span className={css.accentText}>Phone:</span>
            {friend.phone
              ? friend.phone
              : friend.email
              ? 'email only'
              : 'website only'}
          </p>
        </li>
      </ul>

      <div></div>
    </div>
  );
};

export default OurFriendsCard;
