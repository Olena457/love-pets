import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/users/usersOperations.js';
import css from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match'),
});

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const getInputClass = field => {
    if (
      !touchedFields[field] ||
      (field === 'confirmPassword' && confirmPassword === '')
    ) {
      return css.default;
    }

    if (field === 'confirmPassword' && password !== confirmPassword) {
      return css.invalid;
    }

    return errors[field] ? css.invalid : css.valid;
  };

  const getValidationIcon = field => {
    if (touchedFields[field]) {
      return errors[field] ? (
        <Icon id="cross" className={css.invalidIcon} />
      ) : (
        <Icon id="check" className={css.validIcon} />
      );
    }
    return null;
  };

  const onSubmit = async data => {
    const { name, email, password } = data;
    try {
      await dispatch(signup({ name, email, password }));
      navigate('/profile');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.inputWrapper}>
        <input
          type="text"
          placeholder="Name"
          {...register('name')}
          className={`${css.input} ${getInputClass('name')}`}
          onChange={() => trigger('name')}
        />
        {getValidationIcon('name')}
      </div>
      {errors.email && <p className={css.error}>{errors.email.message}</p>}
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
        <Icon id="eye-off" className={css.icon} />
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
          {showPassword ? <Icon id="eye-off" /> : <Icon id="eye" />}
        </button>
      </div>
      {errors.password && (
        <p className={css.error}>{errors.password.message}</p>
      )}

      <div className={css.inputWrapper}>
        <Icon id="eye-off" className={css.icon} />
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Confirm password"
          {...register('confirmPassword')}
          className={`${css.input} ${getInputClass('confirmPassword')}`}
          onChange={() => trigger('confirmPassword')}
        />
        {getValidationIcon('confirmPassword')}
        <button
          type="button"
          className={css.togglePassword}
          onClick={() => setShowConfirmPassword(prev => !prev)}
        >
          {showConfirmPassword ? <Icon id="eye-off" /> : <Icon id="eye" />}
        </button>
      </div>
      {errors.confirmPassword && (
        <p className={css.error}>{errors.confirmPassword.message}</p>
      )}

      <button type="submit" className={css.button}>
        Registration
      </button>
    </form>
  );
};

export default RegisterForm;
