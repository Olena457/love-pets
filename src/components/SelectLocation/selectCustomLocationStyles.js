const locationSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    borderRadius: '30px',
    border: state.isFocused
      ? '1px solid var(--dark-hover)'
      : '1px solid var(--input-default)',
    backgroundColor: 'var(--white-color)',
    padding: '12px',
    width: '100%',
    boxShadow: state.isFocused ? '0 0 5px var(--dark-hover)' : 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      border: '1px solid var(--dark-hover)',
    },
  }),
  placeholder: provided => ({
    ...provided,
    fontSize: '14px',
    fontWeight: '400',
    color: 'var(--black-color)',
  }),
  singleValue: provided => ({
    ...provided,
    color: 'var(--black-color)',
    fontSize: '14px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: 'var(--black-color)',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }),
  menuList: provided => ({
    ...provided,
    padding: 0,
  }),
};

export default locationSelectStyles;
