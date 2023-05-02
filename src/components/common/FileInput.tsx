import React from 'react'
import InputId from '../../models/InputId'


const FileInput = ({name , label , id}:InputId) => {
    return (
        <div className="mb-4 text-start ">
            <label htmlFor={name} className="form-label">{label}</label>
            <input className="form-control form-control-sm w-25" id={id} type="file"/>
        </div>
    )
}

export default FileInput