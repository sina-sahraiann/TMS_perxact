import React from 'react'
import InputId from '../../models/InputId'
import 'bootstrap/dist/css/bootstrap.css'



const CheckInput = ({ id , label ,value , name}:InputId) => {
    return (
        <div className='text-start my-4'>
            <div className="form-check">
                    <input className="form-check-input" type='checkbox' id={id} name={name} value={value} />
                    <label htmlFor={name} className="form-check-label">{label}</label>
            </div>
        </div>
    )
}

export default CheckInput