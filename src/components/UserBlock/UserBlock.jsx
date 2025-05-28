import { useSelector } from 'react-redux';
import { useDeviceType } from '../../hooks/useDeviceType.js';
import { selectProfile } from '../../redux/profile/profileSelectors.js';
import Icon from '../Icon/Icon.jsx';
import css from './UserBlock.module.css';

const UserBlock = () => {
  const deviceType = useDeviceType();
  const profile = useSelector(selectProfile);
  const avatarUrl = profile.avatar;

  return (
    <div className={css.userBlockWrapper}>
      <div className={css.userAvatarWrapper}>
        <div
          className={css.userAvatarThumb}
          style={{
            backgroundImage: avatarUrl ? `url(${avatarUrl})` : 'none',
          }}
        >
          {!avatarUrl || avatarUrl.trim() === '' ? (
            <Icon
              id="user"
              width={
                deviceType === 'desktop' || deviceType === 'tablet' ? 50 : 40
              }
              height={
                deviceType === 'desktop' || deviceType === 'tablet' ? 50 : 40
              }
            />
          ) : null}
        </div>
        {!avatarUrl || avatarUrl.trim() === '' ? (
          <button className={css.userAvatarBtn}>Upload photo</button>
        ) : null}
      </div>

      <form className={css.userInfoForm}>
        <h3 className={css.userInfoFormTitle}>My information</h3>
        <div className={css.userInfoInputsWrapper}>
          <input
            type="text"
            value={profile?.name?.trim() || 'Name'}
            className={css.userInfoFormInput}
            disabled
          />
          <input
            type="email"
            value={profile?.email?.trim() || 'name@gmail.com'}
            className={css.userInfoFormInput}
            disabled
          />
          <input
            type="phone"
            value={profile?.phone?.trim() || '+380000000000'}
            className={css.userInfoFormInput}
            disabled
          />
        </div>
      </form>
    </div>
  );
};
export default UserBlock;
