import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Icon from '../Icon/Icon.jsx';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { updateProfile } from '../../redux/profile/profileSlice';
import { selectProfile } from '../../redux/profile/profileSelectors';
import { closeModal } from '../../redux/modal/modalSlice.js';
import css from './ModalEditUser.css';

const avatarUrlRegExp = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/;
const emailRegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const phoneRegExp = /^\+38\d{10}$/;

// form validation
const EditUserSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Name should have at least 2 characters'),
  email: Yup.string().matches(emailRegExp, 'Invalid email'),
  phone: Yup.string().matches(phoneRegExp, 'Invalid phone'),
  avatar: Yup.string().matches(avatarUrlRegExp, 'Invalid URL or file format'),
});

export const ModalEditUser = () => {
  const userData = useSelector(selectProfile);
  const dispatch = useDispatch();

  const [previewAvatar, setPreviewAvatar] = useState(userData.avatar || '');

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
      phone: userData.phone || '',
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
      setPreviewAvatar(''); // default avatar
    }
  };

  return (
    <div className="modal-edit-user-wrap">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h2 className="edit-user-title">Edit information</h2>
        <div className="user-avatar-thumb">
          {previewAvatar.trim() !== '' ? (
            <img src={previewAvatar} alt="avatar" />
          ) : (
            <Icon className={css.user} width={28} height={28} id="user" />
          )}
        </div>

        <div className="avatar-upload-wrap">
          <div className="input-wrap">
            <input
              {...register('avatar')}
              type="text"
              placeholder="https://test.png"
              className="edit-user-avatar-input"
            />
            <span className="error-message">{errors.avatar?.message}</span>
          </div>
          <button
            type="button"
            onClick={handleUploadPhoto}
            className="avatar-upload-btn"
          >
            Upload photo
            <Icon className={css.iconCloud} id="cloud" width={20} height={20} />
          </button>
        </div>

        <div className="inputs-wrap">
          <div className="input-wrap">
            <input
              {...register('name')}
              type="text"
              placeholder="Name"
              className="edit-user-input"
            />
            <span className="error-message">{errors.name?.message}</span>
          </div>
          <div className="input-wrap">
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className="edit-user-input"
            />
            <span className="error-message">{errors.email?.message}</span>
          </div>
          <div className="input-wrap">
            <input
              {...register('phone')}
              type="text"
              placeholder="Phone"
              className="edit-user-input"
            />
            <span className="error-message">{errors.phone?.message}</span>
          </div>
        </div>
        <button type="submit" className="edit-user-submit-btn">
          Save
        </button>
      </form>
    </div>
  );
};
