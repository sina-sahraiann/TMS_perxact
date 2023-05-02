import React from 'react'
import CancelButton from './CancelButton'
import OkButton from './OkButton'
import TrashButton from './TrashButton'

const OkayCancelTrashGroupbtn = () => {
    return (
        <>
            <div className='d-flex justify-content-end mb-5'>
                <CancelButton />
                <OkButton />
                <TrashButton />
            </div>
        </>
    )
}

export default OkayCancelTrashGroupbtn