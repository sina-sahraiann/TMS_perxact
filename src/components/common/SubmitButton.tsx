import React from 'react'
import InputId from '../../models/InputId'


const SubmitButton = ({ label }: InputId) => {
    return (
        <div className='text-start'>
            <input className='btn btn-outline-secondary' type="submit" value={label} />
        </div>
    )
}

export default SubmitButton