const colors = {
  primary: '#262626',
  focus: '#F6B83D',
  neutral: 'rgba(38, 38, 38, 0.60)',
  background: '#fff',
};

const baseFontSize = window.innerWidth <= 320 ? '14px' : '16px';

const commonStyles = {
  fontSize: baseFontSize,
  textTransform: 'capitalize',
  cursor: 'pointer',
};

const selectStyles = {
  control: provided => ({
    ...provided,
    borderRadius: '30px',
    padding: '5px',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: colors.background,
    fontWeight: '500',
    cursor: 'pointer',
  }),
  placeholder: provided => ({
    ...provided,
    color: colors.primary,
    ...commonStyles,
  }),
  singleValue: provided => ({
    ...provided,
    color: colors.primary,
    ...commonStyles,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: colors.primary,
    cursor: 'pointer',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '15px',
    overflow: 'hidden',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
  }),
  option: (provided, state) => ({
    ...provided,
    ...commonStyles,
    color: state.isFocused ? colors.focus : colors.neutral,
    backgroundColor: 'transparent',
    transition: 'color 0.3s ease',
    ':active': {
      backgroundColor: 'transparent',
    },
  }),
};

export default selectStyles;
