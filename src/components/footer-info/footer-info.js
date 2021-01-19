import React from 'react'
import './footer-info.css'

const FooterInfo = ({label, className, clearCompleted}) =>{
    return <span onClick={clearCompleted} className={className}>{label}</span>
}


export default FooterInfo;