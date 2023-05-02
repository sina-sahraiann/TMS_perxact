import React, { ReactFragment } from 'react'
import Avatar from '../../components/common/Avatar'
import Badge from '../../components/common/Badge'
import BadgeContainer from '../../components/common/BadgeContainer'
import Edit_delete_button from '../../components/common/Edit_delete_button'
import StateBadge from '../../components/common/StateBadge'
import TagBadge from '../../components/common/TagBadge'
import TypeBadge from '../../components/common/TypeBadge'
import DepartmentModel from '../../models/Department'
import single_office_model from '../../models/office'
import UserInfoModel, { avatar } from '../../models/user'


const EachDepartmentCard = ({ id, name, state, tag, type ,tickets}: DepartmentModel) => {


    return (
        <React.Fragment>
            <div className="card mb-3 card-color">
                <div className="card-body text-start">
                    <div className='d-flex justify-content-between mb-4'>
                        <h4 className="card-title">{name}</h4>
                        <Edit_delete_button />
                    </div>
                    <BadgeContainer text='State :'>
                        {
                            state.map((state, index) =>
                                <Badge text={state.name} editMode={false} color={state.color} key={'state' + index} />
                            )
                        }
                    </BadgeContainer>

                    <BadgeContainer text='Type :'>
                        {
                            type.map((type, index) =>
                                <Badge text={type.name} editMode={false} color={type.color} key={'type' + index} />
                            )
                        }
                    </BadgeContainer>

                    <BadgeContainer text='Tag :'>
                        {
                            tag.map((tag, index) =>
                                <Badge text={tag.name} editMode={false} color={tag.color} key={'tag' + index} />
                            )
                        }
                    </BadgeContainer>
                    <BadgeContainer text='Tickets :'>
                        {
                            tickets.map((tickets, index) =>
                                <Badge text={tickets.name} editMode={false} color={tickets.color} key={'tag' + index} />
                            )
                        }
                    </BadgeContainer>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EachDepartmentCard