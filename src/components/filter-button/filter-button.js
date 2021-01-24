import React from 'react';
import PropTypes from "prop-types";

const FilterButton = ({label, className, onClickTaskFilterBtnHandler}) => {
    return <button onClick={() => onClickTaskFilterBtnHandler(label)} className={className} label={label}>
              {label}
          </button>
}
FilterButton.defaultProps = {
    onClickTaskFilterBtnHandler: () => {},
    className: '',
    label: ''
}

FilterButton.propTypes = {
    onClickTaskFilterBtnHandler: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default FilterButton;