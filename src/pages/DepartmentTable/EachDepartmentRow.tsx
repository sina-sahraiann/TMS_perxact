import React, { ReactFragment } from 'react'
import Avatar from '../../components/common/Avatar'
import Badge from '../../components/common/Badge'
import Edit_delete_button from '../../components/common/Edit_delete_button'
import StateBadge from '../../components/common/StateBadge'
import TagBadge from '../../components/common/TagBadge'
import TypeBadge from '../../components/common/TypeBadge'
import DepartmentModel from '../../models/Department'
import single_office_model from '../../models/office'
import UserInfoModel, { avatar } from '../../models/user'


const EachDepartmentRow = ({ id, name, state, tag, type ,tickets}: DepartmentModel) => {

    return (
        <React.Fragment>
            <tr className='text-center'>
                <td className='align-items-center'>{name}</td>
                <td>
                    <div className='d-flex justify-content-center flex-wrap'>
                        {
                            state.map((state, index) =>
                                <Badge text={state.name} editMode={false} color={state.color} key={'state' + index} />
                            )
                        }
                    </div>

                </td>
                <td>
                    <div className='d-flex justify-content-center flex-wrap'>
                        {
                            type.map((type, index) =>
                                <Badge text={type.name} editMode={false} color={type.color} key={'type' + index} />
                            )
                        }
                    </div>
                </td>
                <td>
                    <div className='d-flex justify-content-center flex-wrap'>
                        {
                            tag.map((tag, index) =>
                            <Badge text={tag.name} editMode={false} color={tag.color} key={'tag' + index}/>
                            )
                        }
                    </div>
                </td>
                <td>
                    <div className='d-flex justify-content-center flex-wrap'>
                        {
                            tickets.map((tickets, index) =>
                            <Badge text={tickets.name} editMode={false} color={tickets.color} key={'tickets' + index}/>
                            )
                        }
                    </div>
                </td>
                <td>
                    <Edit_delete_button />
                </td>
            </tr>
        </React.Fragment>
    )
}

export default EachDepartmentRow