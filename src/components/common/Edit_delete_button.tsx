import React, { useState } from 'react'

type Props = {}

const Edit_delete_button = (props: Props) => {

    const [d_none, setd_none] = useState('d-none');
    
    
    const onClick = () => {
        if (d_none == '') {
            setd_none('d-none')
            return;
        }
        setd_none('')
    }

    return (
        <div className="position-relative ">
            <ul className={d_none + ' flex-column position-absolute top-0 start-0 btn-group'}>
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-info">Edit</button>
            </ul>
            <button className='border-0 p-0 bg-transparent' onClick={onClick}>
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
        </div>
    )
}

export default Edit_delete_button