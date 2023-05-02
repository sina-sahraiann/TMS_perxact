import Badge from '../../components/common/Badge'
import BadgeContainer from '../../components/common/BadgeContainer'
import BasicLabelDesc from '../../components/common/BasicLabelDesc'
import Edit_delete_button from '../../components/common/Edit_delete_button'
import StateBadge from '../../components/common/StateBadge'
import TagBadge from '../../components/common/TagBadge'
import TypeBadge from '../../components/common/TypeBadge'
import ViewEditNewLayout from '../../components/layout/ViewEditNewLayout'
import DepartmentModel from '../../models/Department'
import single_office_model from '../../models/office'

const DepartmentViewMode = ({ id, name, state, tag, type, tickets }: DepartmentModel) => {


    return (
        <>
            <ViewEditNewLayout>
                <div style={{right:'10px'}} className='d-flex position-absolute'>
                    <Edit_delete_button />
                </div>
                <div>
                    <BasicLabelDesc label='Name ' value='CAE' />
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
                                <Badge text={tickets.name} editMode={false} color={tickets.color} key={'tickets' + index} />
                            )
                        }
                    </BadgeContainer>

                </div>
            </ViewEditNewLayout>
        </>
    )
}

export default DepartmentViewMode