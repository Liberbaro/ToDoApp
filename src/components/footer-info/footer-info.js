import React from 'react';
import PropsType from 'prop-types';
import './footer-info.css';

const FooterInfo = ({label, className, clearCompletedTasks}) => {
    return <span onClick={clearCompletedTasks} className={className}>{label}</span>
}

FooterInfo.defaultProps = {
    clearCompletedTasks: () => {},
    className: '',
    label: ''

}

FooterInfo.propsType = {
    clearCompletedTasks: PropsType.func.isRequired,
    className: PropsType.string.isRequired,
    label: PropsType.string.isRequired,
}


export default FooterInfo;