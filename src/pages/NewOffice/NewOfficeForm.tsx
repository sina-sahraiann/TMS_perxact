import React from 'react'
import BasicInput from '../../components/common/BasicInput'
import BasicLabelDesc from '../../components/common/BasicLabelDesc'
import single_office_model from '../../models/office'
import { userList } from '../../services/list_of_all_users'

const NewOfficeForm = () => {

    return (
        <div>
            <BasicInput label='Name' />
            <BasicInput label='Manager' />
            <BasicInput label='Location' />
            <BasicInput label='Members' />

            {/* <div className=' col-12 col-md-10 d-flex flex-column flex-sm-row align-items-start p-0 text-start justify-content-between'>
                <label className='form-label d-block col-2 me-3'>Members</label>
                <div className='bg-secondary bg-opacity-10 d-flex flex-wrap border border-dark pb-4 mt-3 rounded'>
                </div>
            </div> */}
        </div>
    )
}

export default NewOfficeForm