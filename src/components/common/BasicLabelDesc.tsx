import React from 'react'
import InputId from '../../models/InputId'

type Props = {}

const BasicLabelDesc = ({ label, type, value }: InputId) => {
    return (
        <div className="form-check col-10 d-flex align-items-center p-0 text-start justify-content-start my-1">
            <label className='form-label col-1 me-5 fw-bold'> {label + ':'}</label>
            <input className='form-control flex-1 me-auto mb-2 fw-bold' type={type} value={value} disabled />
        </div>
    )
}

export default BasicLabelDesc