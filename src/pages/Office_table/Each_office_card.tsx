import React, { ReactFragment } from 'react'
import Avatar from '../../components/common/Avatar'
import Edit_delete_button from '../../components/common/Edit_delete_button'
import single_office_model from '../../models/office'
import UserInfoModel, { avatar } from '../../models/user'


const Each_office_card = ({ Name, Manager, Location, Members }
    : single_office_model) => {

    const Avatars = Members.map((user: UserInfoModel) => {
        return (
            <Avatar name={user.username} image={user.Avatarimage} />
        )
    }
    )

    return (
        <React.Fragment>
            <div className="card mb-3 card-color">
                <div className="card-body text-start">
                    <div className='d-flex justify-content-between mb-4'>
                        <h4 className="card-title">{Name}</h4>
                        <Edit_delete_button/>
                    </div>
                    <div className='card-text mb-3'>
                        <span>Manager</span>
                        <span className='fw-bolder ms-3'>{Manager}</span>
                    </div>
                    <div className='card-text mb-3'>
                        <span>Location</span>
                        <span className='fw-bolder ms-3'>{Location}</span>
                    </div>
                    <div>
                        <span className='mb-3 d-block'>Members</span>
                        {Avatars}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Each_office_card