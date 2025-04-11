import React from 'react';
import css from './UserBlock.module.css';
import Icon from '../../Icon/Icon';
import { useDeviceType } from '../../../hooks/useDeviceType';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../../redux/profile/profileSelectors';

export const UserBlock = () => {
  const deviceType = useDeviceType();
  const userData = useSelector(selectProfile);
  const avatarUrl = userData.avatar;

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
            value={userData?.name?.trim() || 'Name'}
            className={css.userInfoFormInput}
            disabled
          />
          <input
            type="email"
            value={userData?.email?.trim() || 'name@gmail.com'}
            className={css.userInfoFormInput}
            disabled
          />
          <input
            type="phone"
            value={userData?.phone?.trim() || '+380'}
            className={css.userInfoFormInput}
            disabled
          />
        </div>
      </form>
    </div>
  );
};
