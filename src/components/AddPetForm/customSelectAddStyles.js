const customSelectAddStyles = {
  control: baseStyles => ({
    ...baseStyles,
    width: '100%',
    color: '#262626',
    border: '1px solid transparent',
    outline: 'none',
    overflow: 'hidden',
    borderRadius: '30px',
    fontSize: '14px',
    outlineStyle: 'none',
    transition: 'border-color 0.3s ease',
    ':hover': {
      borderColor: 'transparent',
    },
    ':focus': {
      borderColor: 'transparent',
    },
    ':focus-visible': {
      outline: 'none',
      borderColor: 'transparent',
    },
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    color: ' #b6aeae',
    ':hover': {
      color: ' #f6b83d',
    },
  }),
  menu: baseStyles => ({
    ...baseStyles,
    borderRadius: '30px',
    marginTop: '5px',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? ' #f6b83d' : '  #ffffff',
    color: state.isFocused ? ' #ffffff' : ' #262626',
    fontSize: '14px',
    cursor: 'pointer',
  }),
};

export default customSelectAddStyles;
