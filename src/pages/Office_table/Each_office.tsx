import React, { ReactFragment } from 'react'
import Avatar from '../../components/common/Avatar'
import Edit_delete_button from '../../components/common/Edit_delete_button'
import single_office_model from '../../models/office'
import UserInfoModel, { avatar } from '../../models/user'


const Each_office = ({ Name, Manager, Location, Members }: single_office_model) => {
    console.log(Members)

    const Avatars = Members.map((user: UserInfoModel) => {
        return (
            <Avatar
                name={user.username}
                image={user.Avatarimage}
            />
        )
    }
    )

    return (
        <React.Fragment>
            <tr className='text-start'>
                <td>{Name}</td>
                <td>{Manager}</td>
                <td>{Location}</td>
                <td>
                    {Avatars}
                </td>
                <td className='text-center'> <Edit_delete_button /> </td>
            </tr>
        </React.Fragment>
    )
}

export default Each_office