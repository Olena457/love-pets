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
  { value: 'ants', label: 'Ants' },
  { value: 'bees', label: 'Bees' },
  { value: 'fish', label: 'Fish' },
  { value: 'frog', label: 'Frog' },
  { value: 'lizard', label: 'Lizard' },
  { value: 'monkey', label: 'Monkey' },
  { value: 'snake', label: 'Snake' },
  { value: 'dog', label: 'Dog' },
  { value: 'turtle', label: 'Turtle' },
  { value: 'spider', label: 'Spider' },
  { value: 'cat', label: 'Cat' },
  { value: 'bird', label: 'Bird' },
  { value: 'rabbit', label: 'Rabbit' },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  imgUrl: Yup.string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      'Must be a valid image URL'
    )
    .required('Image URL is required'),
  birthday: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in the format YYYY-MM-DD')
    .required('Birthday is required'),
  species: Yup.string().required('Type of animal is required'),
  gender: Yup.string().required('Gender is required'),
});

const AddPetForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [gender, setGender] = useState('');

  const onSubmit = data => {
    toast.success('Data successfully added!');
    console.log('Simulated Data:', data);
    reset();
    setGender('');
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
                  className={`${css.inputfield} ${
                    errors.imgUrl ? css.invalid : ''
                  }`}
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
        {/* Name */}
        <div className={css.formGroup}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Title"
                className={`${css.inputfield} ${
                  errors.name ? css.invalid : ''
                }`}
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
                className={`${css.inputfield} ${
                  errors.name ? css.invalid : ''
                }`}
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
                  className={`${css.inputfield} ${
                    errors.birthday ? css.invalid : ''
                  }`}
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
