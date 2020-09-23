import { colors, dimensions } from './variables';

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: `1px solid ${colors.ui.default}`,
    color: state.isSelected ? colors.white : colors.ui.default,
    padding: 10,
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: 0,
    minHeight: 40,
    border: state.isDisabled ? `1px solid ${colors.text.default}` : `1px solid ${colors.ui.default}`,
    backgroundColor: state.isDisabled ? colors.ui.dark : colors.white,
    color: state.isDisabled ? colors.text.default : colors.ui.dark,
    opacity: state.isDisabled ? 0.4 : 1,
    margin: '10px 0 15px 0',
  }),
  menu: (provided, state) => ({
    ...provided,
    zIndex: 999,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    backgroundColor: colors.ui.default,
    fontSize: `${dimensions.fontSize.regular}px`,
    color: colors.white,
    borderRadius: 0,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    backgroundColor: colors.ui.default,
    color: colors.white,
    cursor: 'pointer',
    borderRadius: 0,
  }),
};
