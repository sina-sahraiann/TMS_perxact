import React from 'react'
import BasicLabelDesc from '../../components/common/BasicLabelDesc'
import Edit_delete_button from '../../components/common/Edit_delete_button'
import single_office_model from '../../models/office'
import { userList } from '../../services/list_of_all_users'

const OfficeViewMode = ({ Name, Location, Manager, Members }: single_office_model) => {

    console.log(Members);

    return (
        <>
            <div className='d-flex justify-content-end mb-4'>
                <Edit_delete_button />
            </div>
            <div>

                <BasicLabelDesc label='Name' value={Name} />
                <BasicLabelDesc label='Manager' value={Manager} />
                <BasicLabelDesc label='Location' value={Location} />
                <div className=' col-10 d-flex flex-column flex-sm-row align-items-start p-0 text-start justify-content-between'>
                    <label className='form-label d-block col-1 mt-2 me-5 fw-bold'>Members:</label>
                    <div className=' d-flex flex-wrap pb-4 rounded'>
                        {
                            Members.map((member, index) =>
                                <span
                                    key={'memberbadge' + index}
                                    className='badge text-dark m-1 p-2 border border-dark bg-white'>
                                    {member.username}
                                </span>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfficeViewMode