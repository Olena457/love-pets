import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { updateProfile } from '../../redux/profile/profileSlice';
import { selectProfile } from '../../redux/profile/profileSelectors';
import { closeModal } from '../../redux/modal/modalSlice.js';
import { useDeviceType } from '../../hooks/useDeviceType.js';
import Icon from '../Icon/Icon.jsx';
const defaultAvatar = '../src/assets/imgs/test.jpg';
import css from './ModalEditUser.module.css';

const avatarUrlRegExp = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/;
const emailRegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const phoneRegExp = /^\+38\d{10}$/;

const EditUserSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Name should have at least 2 characters'),
  email: Yup.string().matches(emailRegExp, 'Invalid email'),
  phone: Yup.string().matches(phoneRegExp, 'Invalid phone'),
  avatar: Yup.string()
    .matches(avatarUrlRegExp, 'Invalid URL or file format')
    .nullable()
    .transform(value => (value === '' ? null : value)),
});

export const ModalEditUser = () => {
  const deviceType = useDeviceType();
  const userData = useSelector(selectProfile);
  // const viewed = userData.noticesViewed;
  // console.log('viewed', viewed);
  const dispatch = useDispatch();

  const [previewAvatar, setPreviewAvatar] = useState(
    userData.avatar || defaultAvatar
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(EditUserSchema),
    mode: 'onChange',
    defaultValues: {
      name: userData.name || 'Name',
      email: userData.email || 'name@gmail.com',
      phone: userData.phone || '+380000000000',
      avatar: userData.avatar || '',
    },
  });

  const handleFormSubmit = data => {
    const { name, email, phone, avatar } = data;

    try {
      dispatch(updateProfile({ name, email, phone, avatar }));
      reset();
      dispatch(closeModal());
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleUploadPhoto = () => {
    const avatarUrl = watch('avatar');
    if (avatarUrl && avatarUrl.trim() !== '') {
      setPreviewAvatar(avatarUrl);
    } else {
      setPreviewAvatar(defaultAvatar);
    }
  };

  return (
    <div className={css.modalEditUserWrap}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h2 className={css.editUserTitle}>Edit information</h2>

        <div className={css.userAvatarThumb}>
          {previewAvatar && previewAvatar.trim() !== '' ? (
            <img
              src={previewAvatar}
              alt="User Avatar"
              className={css.userAvatarImg}
              width={
                deviceType === 'desktop'
                  ? 50
                  : deviceType === 'tablet'
                  ? 50
                  : 40
              }
              height={
                deviceType === 'desktop'
                  ? 50
                  : deviceType === 'tablet'
                  ? 50
                  : 40
              }
            />
          ) : (
            <Icon
              id="user"
              width={
                deviceType === 'desktop'
                  ? 50
                  : deviceType === 'tablet'
                  ? 50
                  : 40
              }
              height={
                deviceType === 'desktop'
                  ? 50
                  : deviceType === 'tablet'
                  ? 50
                  : 40
              }
              className={css.userBigIcon}
            />
          )}
        </div>

        <div className={css.avatarUploadWrap}>
          <div className={css.inputWrap}>
            <input
              {...register('avatar')}
              type="text"
              placeholder="Avatar URL"
              className={css.editUserAvatarInput}
            />
            <span className={css.errorMessage}>{errors.avatar?.message}</span>
          </div>

          <button
            disabled
            onClick={handleUploadPhoto}
            className={css.uploadButton}
          >
            <span className={css.uploadTitle}>Upload photo</span>
            <Icon id="cloud" width={18} height={18} className={css.cloudIcon} />
          </button>
        </div>
        <div className={css.inputsWrap}>
          <div className={css.inputWrap}>
            <input
              {...register('name')}
              type="text"
              placeholder="Name"
              className={css.editUserInput}
            />
            <span className={css.errorMessage}>{errors.name?.message}</span>
          </div>
          <div className={css.inputWrap}>
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className={css.editUserInput}
            />
            <span className={css.errorMessage}>{errors.email?.message}</span>
          </div>
          <div className={css.inputWrap}>
            <input
              {...register('phone')}
              type="text"
              placeholder="Phone"
              className={css.editUserInput}
            />
            <span className={css.errorMessage}>{errors.phone?.message}</span>
          </div>
        </div>
        <button type="submit" className={css.editUserSubmitBtn}>
          Save
        </button>
      </form>
    </div>
  );
};
