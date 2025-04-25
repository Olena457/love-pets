// import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
// import { parse, format } from 'date-fns';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import multipleImg from '../../assets/icons/multiple.svg';
import iconMale from '../../assets/icons/iconMale.svg';
import iconFemale from '../../assets/icons/iconFemale.svg';
import Icon from '../Icon/Icon.jsx';

import customSelectAddStyles from '../../components/AddPetForm/customSelectAddStyles.js';

import Select from 'react-select';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
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

  imgUrl: Yup.string()
    .nullable()
    .test(
      'is-url-if-present',
      'Must be a valid image URL',
      value =>
        !value ||
        value.length === 0 ||
        /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/.test(value)
    ),
  birthday: Yup.string().required('Birthday is required'),
  species: Yup.object().shape({
    value: Yup.string().required('Type of animal is required'),
    label: Yup.string(),
  }),

  sex: Yup.string().required('Sex is required'),
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
  // const [sex, setSex] = useState('');

  const handleSpeciesChange = option => {
    setValue('species', option);
    trigger('species');
  };

  const getInputClass = field => {
    if (!touchedFields[field] && !errors[field]) {
      return css.default;
    }
    return errors[field] ? css.invalid : css.valid;
  };

  const onSubmit = async data => {
    const isValid = await trigger([
      'title',
      'name',
      'imgUrl',
      'birthday',
      'species',
      'sex',
    ]);
    if (!isValid) {
      console.log('Form contains errors');
      return;
    }
    // const parsedDate = parse(data.birthday, 'dd.MM.yyyy', new Date());
    // const formattedDate = format(parsedDate, 'yyyy-MM-dd');
    // data.birthday = formattedDate;
    try {
      toast.success('Data successfully added!');
      console.log('Simulated Data:', data);
      reset();
      // setSex('');
      // } catch {
      //   toast.error('Something went wrong');
      // }
      setTimeout(() => {
        window.location.href = '/profile';
      }, 2000);
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
        <Controller
          name="sex"
          control={control}
          render={({ field }) => (
            <div className={css.formGroup}>
              <div className={css.genderSelection}>
                <label>
                  <input
                    {...field}
                    type="radio"
                    name="sex"
                    value="female"
                    checked={field.value === 'female'}
                    className={css.radio}
                  />
                  <div className={`${css.icon} ${css.female}`}>
                    <img
                      src={iconFemale}
                      alt="Female"
                      className={css.iconGender}
                    />
                  </div>
                </label>
                <label>
                  <input
                    {...field}
                    type="radio"
                    name="sex"
                    value="male"
                    checked={field.value === 'male'}
                    className={css.radio}
                  />
                  <div className={`${css.icon} ${css.male}`}>
                    <img src={iconMale} alt="Male" className={css.iconGender} />
                  </div>
                </label>
                <label>
                  <input
                    {...field}
                    type="radio"
                    name="sex"
                    value="multiple"
                    checked={field.value === 'multiple'}
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

              {errors.sex && <p className={css.error}>{errors.sex.message}</p>}
              <div className={css.petAvatar}>
                <Icon
                  id="paw"
                  width={32}
                  height={32}
                  className={css.iconPetDefault}
                />
              </div>
            </div>
          )}
        />
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
                  onChange={e => {
                    field.onChange(e.target.value);
                    trigger('imgUrl');
                  }}
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

        <div className={css.formGroup}>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder={errors.title ? 'Title is required' : 'Title'}
                {...register('title')}
                className={`${css.inputfield} ${getInputClass('title')}`}
                onChange={e => {
                  field.onChange(e.target.value);
                  trigger('title');
                }}
              />
            )}
          />
          {/* {errors.name && <p className={css.error}>{errors.name.message}</p>} */}
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
                onChange={e => {
                  field.onChange(e.target.value);
                  trigger('name');
                }}
              />
            )}
          />
          {/* {errors.name && <p className={css.error}>{errors.name.message}</p>} */}
        </div>
        <div className={css.GroupSelect}>
          {/* Date of Birth */}
          <div className={css.formGroup}>
            <Controller
              name="birthDay"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  {...register('birthday')}
                  className={`${css.inputfield} ${getInputClass('birthday')}`}
                  onChange={e => {
                    field.onChange(e.target.value);
                    trigger('birthDay');
                  }}
                />
              )}
            />
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
                  onChange={option => {
                    field.onChange(option);
                    handleSpeciesChange(option);
                  }}
                  className={`${css.select} ${getInputClass('species')}`}
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
            onClick={() => (window.location.href = '/news')}
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
