import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import multipleImg from '../../assets/icons/multiple.svg';
import iconMale from '../../assets/icons/iconMale.svg';
import iconFemale from '../../assets/icons/iconFemale.svg';
import Icon from '../Icon/Icon.jsx';

import customSelectAddStyles from '../../components/AddPetForm/customSelectAddStyles.js';

import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './AddPetForm.module.css';

const petTypes = [
  { value: 'ants', label: 'ants' },
  { value: 'bees', label: 'bees' },
  { value: 'fish', label: 'fish' },
  { value: 'frog', label: 'frog' },
  { value: 'lizard', label: 'lizard' },
  { value: 'monkey', label: 'monkey' },
  { value: 'snake', label: 'snake' },
  { value: 'dog', label: 'dog' },
  { value: 'turtle', label: 'turtle' },
  { value: 'spider', label: 'spider' },
  { value: 'cat', label: 'cat' },
  { value: 'bird', label: 'bird' },
  { value: 'rabbit', label: 'rabbit' },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  name: Yup.string().required('Name is required'),
  imgUrl: Yup.string().matches(
    /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
    'Must be a valid image URL'
  ),

  birthday: Yup.string()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Date must be in the format DD.MM.YYYY')
    .required('Birthday is required'),
  species: Yup.object().shape({
    value: Yup.string().required('Type of animal is required'),
    label: Yup.string(),
  }),

  // species: Yup.string().required('Type of animal is required'),
  gender: Yup.string().required('Gender is required'),
});

const AddPetForm = () => {
  const {
    trigger,
    register,
    setValue,
    control,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });
  const [gender, setGender] = useState('');

  const handleSpeciesChange = option => {
    setValue('species', option); // Реєстрація лише value
    trigger('species'); // Триггер валідації
  };

  const getInputClass = field => {
    if (!touchedFields[field] && !errors[field]) {
      return css.default; // Сірий бордер для дефолтного стану
    }
    return errors[field] ? css.invalid : css.valid; // Червоний бордер для невалідних, зелений для валідних
  };

  // const getInputClass = field => {
  //   return errors[field] ? css.invalid : css.valid;
  // };

  // const getInputClass = field => {
  //   if (!touchedFields[field]) {
  //     return css.default;
  //   }
  //   return errors[field] ? css.invalid : css.valid;
  // };
  // const onSubmit = data => {
  //   toast.success('Data successfully added!');
  //   console.log('Simulated Data:', data);
  //   reset();
  //   setGender('');
  // };
  const onSubmit = async data => {
    const isValid = await trigger([
      'title',
      'name',
      'imgUrl',
      'birthday',
      'species',
      'gender',
    ]);
    if (!isValid) {
      console.log('Form contains errors'); // Для тестування помилок
      return; // Зупиняємо сабміт, якщо є помилки
    }

    try {
      toast.success('Data successfully added!');
      console.log('Simulated Data:', data);
      reset();
      setGender('');
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className={css.formContainer}>
      <h1 className={css.formTitle}>
        Add my pet/<span>personal details</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        {/* Gender Selection */}
        <div className={css.formGroup}>
          <div className={css.genderSelection}>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
                className={css.radio}
              />
              <div className={`${css.icon} ${css.female}`}>
                <img src={iconFemale} alt="Female" className={css.iconGender} />
              </div>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
                className={css.radio}
              />
              <div className={`${css.icon} ${css.male}`}>
                <img src={iconMale} alt="Male" className={css.iconGender} />
              </div>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="multiple"
                checked={gender === 'multiple'}
                onChange={() => setGender('multiple')}
                className={css.radio}
              />
              <div className={`${css.icon} ${css.multiple}`}>
                <img
                  src={multipleImg}
                  alt="Multiple"
                  className={css.iconGender}
                />
              </div>
            </label>
          </div>

          {errors.gender && (
            <p className={css.error}>{errors.gender.message}</p>
          )}
          <div className={css.petAvatar}>
            <Icon
              id="paw"
              width={32}
              height={32}
              className={css.iconPetDefault}
            />
          </div>
        </div>
        {/* avatar________________________________ */}

        {/* Image URL */}
        <div className={css.formGroup}>
          <div className={css.wrapperUpload}>
            <Controller
              name="imgUrl"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Enter URL "
                  {...register('imgUrl')}
                  className={`${css.inputfield} ${getInputClass('imgUrl')}`}
                  onChange={() => trigger('imgUrl')}
                  // className={`${css.inputfield} ${
                  //   errors.imgUrl ? css.invalid : ''
                  // }`}
                />
              )}
            />
            <button className={css.uploadButton}>
              <span className={css.uploadTitle}>Upload photo</span>
              <Icon
                id="cloud"
                width={18}
                height={18}
                className={css.cloudIcon}
              />
            </button>
          </div>
          {errors.imgUrl && (
            <p className={css.error}>{errors.imgUrl.message}</p>
          )}
        </div>
        {/* Title*/}
        <div className={css.formGroup}>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                // placeholder="Title"
                placeholder={errors.title ? 'Title is required' : 'Title'}
                {...register('title')}
                className={`${css.inputfield} ${getInputClass('title')}`}
                onChange={() => trigger('title')}
              />
            )}
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}
        </div>
        {/* Name */}
        <div className={css.formGroup}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Pet's name"
                {...register('name')}
                className={`${css.inputfield} ${getInputClass('name')}`}
                onChange={() => trigger('name')}
              />
            )}
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}
        </div>
        <div className={css.GroupSelect}>
          {/* Date of Birth */}
          <div className={css.formGroup}>
            <Controller
              name="birthday"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  {...register('birthday')}
                  className={`${css.inputfield} ${getInputClass('birthday')}`}
                  onChange={() => trigger('birthday')}
                />
              )}
            />
            {errors.birthday && (
              <p className={css.error}>{errors.birthday.message}</p>
            )}
          </div>

          {/* Type of Animal */}
          <div className={css.formGroup}>
            <Controller
              name="species"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={petTypes}
                  placeholder="Select type"
                  styles={customSelectAddStyles}
                  // {...register('species')}
                  // className={`${css.select} ${getInputClass('species')}`}
                  onChange={option => {
                    field.onChange(option);
                    handleSpeciesChange(option);
                  }}
                  className={`${css.select} ${
                    errors.species ? css.invalid : ''
                  }`}
                />
              )}
            />
            {errors.species && (
              <p className={css.error}>{errors.species.message}</p>
            )}
          </div>
        </div>
        {/* Buttons */}
        <div className={css.buttonGroup}>
          <button
            type="button"
            className={`${css.buttonAdd} ${css.back}`}
            onClick={() => (window.location.href = '/profile')}
          >
            Back
          </button>
          <button type="submit" className={`${css.buttonAdd} ${css.submit}`}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;
