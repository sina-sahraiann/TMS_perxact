import React from 'react'
import BasicInput from '../../components/common/BasicInput'
import BasicLabelDesc from '../../components/common/BasicLabelDesc'
import OkayCancelTrashGroupbtn from '../../components/common/OkayCancelTrashGroupbtn'
import single_office_model from '../../models/office'
import { userList } from '../../services/list_of_all_users'

const OfficeEditMode = ({ Name, Location, Manager, Members }: single_office_model) => {


    return (
        <>
            <OkayCancelTrashGroupbtn/>
            <div>

                <BasicInput label='Name' value={Name} />
                <BasicInput label='Manager' value={Manager} />
                <BasicInput label='Location' value={Location} />
                <div className=' col-10 d-flex flex-column flex-sm-row align-items-start p-0 text-start justify-content-between'>
                    <label className='form-label d-block col-1 me-3 fw-bold mt-2 me-5'>Members:</label>
                    <div className=' d-flex flex-wrap pb-4 rounded'>
                        {
                            Members.map((member, index) =>
                                <span
                                    key={'memberbadge' + index}
                                    className='badge text-dark m-1 p-2 border border-dark d-flex bg-white'>
                                    <span>{member.username}</span>
                                    <a className='ms-2 text-dark' href='*'><i className='fa-xmark fa-solid'></i></a>
                                </span>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfficeEditMode