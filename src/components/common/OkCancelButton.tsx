import React from 'react'
import CancelButton from './CancelButton'
import OkButton from './OkButton'
import TrashButton from './TrashButton'

const OkCancelButton = () => {
    return (
        <>
            <div className='d-flex justify-content-end mb-5'>
                <CancelButton />
                <OkButton />
            </div>
        </>
    )
}

export default OkCancelButton