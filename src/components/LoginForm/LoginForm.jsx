import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import showEye from '../../assets/icons/showEye.svg';
import eyeIcon from '../../assets/icons/eyeIcon.svg';
import { useDispatch } from 'react-redux';
import { signin } from '../../redux/users/usersOperations.js';
import css from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const getInputClass = field => {
    if (touchedFields[field]) {
      return errors[field] ? css.invalid : css.valid;
    }
    return css.default;
  };

  const getValidationIcon = field => {
    if (touchedFields[field]) {
      return errors[field] ? (
        <Icon id="cross" width={16} height={16} className={css.invalidIcon} />
      ) : (
        <Icon id="check" width={16} height={16} className={css.validIcon} />
      );
    }
    return null;
  };

  const onSubmit = async data => {
    const { email, password } = data;
    try {
      await dispatch(signin({ email, password }));
      navigate('/profile');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.inputWrapper}>
        <input
          type="email"
          placeholder="Email"
          {...register('email')}
          className={`${css.input} ${getInputClass('email')}`}
          onChange={() => trigger('email')}
        />
        {getValidationIcon('email')}
      </div>
      {errors.email && <p className={css.error}>{errors.email.message}</p>}

      <div className={css.inputWrapper}>
        {/* <Icon id="eye-off" className={css.icon} /> */}
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          {...register('password')}
          className={`${css.input} ${getInputClass('password')}`}
          onChange={() => trigger('password')}
        />
        {getValidationIcon('password')}
        <button
          type="button"
          className={css.togglePassword}
          onClick={() => setShowPassword(prev => !prev)}
        >
          {showPassword ? (
            <img src={showEye} alt="eye show" />
          ) : (
            <img src={eyeIcon} alt="eye hide" />
          )}
        </button>
      </div>
      {errors.password && (
        <p className={css.error}>{errors.password.message}</p>
      )}

      <button type="submit" className={css.button}>
        Login
      </button>
      <p className={css.footerDescription}>
        Already have an account?<a href="/register">register</a>
      </p>
    </form>
  );
};

export default LoginForm;
