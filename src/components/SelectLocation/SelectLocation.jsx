import AsyncSelect from 'react-select/async';
import axiosInstance from '../../redux/api.js';
import css from './SelectLocation.module.css';
import blackCross from '../../assets/icons/blackCross.svg';
import { useDispatch } from 'react-redux';
import { setLocation, setLocationId } from '../../redux/filters/filtersSlice';
import { setFilterTerm } from '../../redux/pets/petsSlice';
import customStyles from './selectCustomStyles.js';

export const SelectLocation = ({ handleOptionChange, selectedOpt }) => {
  const dispatch = useDispatch();

  const loadOptions = async inputValue => {
    try {
      const response = await axiosInstance.get(`/cities?keyword=${inputValue}`);
      const fetchedOptions = response.data.map(option => ({
        value: option._id,
        label: `${option.stateEn}, ${option.cityEn}`,
      }));
      return fetchedOptions;
    } catch (error) {
      console.error('Error fetching options:', error);
      return [];
    }
  };

  const handleChange = selected => {
    if (selected) {
      handleOptionChange(selected);
    }
  };

  const handleReset = () => {
    dispatch(setLocation(''));
    dispatch(setLocationId(''));
    dispatch(setFilterTerm(''));
  };

  return (
    <div className={css.selectContainer}>
      <AsyncSelect
        value={selectedOpt}
        onChange={handleChange}
        loadOptions={loadOptions}
        styles={customStyles}
        placeholder="Enter location"
        noOptionsMessage={() => 'No options found'}
      />
      {selectedOpt && (
        <button className={css.resetBtn} type="button" onClick={handleReset}>
          <img
            src={blackCross}
            alt="clear"
            width="18"
            height="18"
            className={css.crossIcon}
          />
        </button>
      )}
    </div>
  );
};
