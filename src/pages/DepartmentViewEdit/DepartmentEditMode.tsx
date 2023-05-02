import Badge from '../../components/common/Badge'
import BadgeContainer from '../../components/common/BadgeContainer'
import BasicInput from '../../components/common/BasicInput'
import CreatNewButtonTitleless from '../../components/common/CreatNewButtonTitleless'
import OkayCancelTrashGroupbtn from '../../components/common/OkayCancelTrashGroupbtn'
import OkCancelButton from '../../components/common/OkCancelButton'
import OkCancelButtton from '../../components/common/OkCancelButton'
import StateBadge from '../../components/common/StateBadge'
import TagBadge from '../../components/common/TagBadge'
import TypeBadge from '../../components/common/TypeBadge'
import ViewEditNewLayout from '../../components/layout/ViewEditNewLayout'
import DepartmentModel from '../../models/Department'
import ColorPicker from './ColorPicker'

const DepartmentEditMode = ({ id, name, state, tag, type ,tickets}: DepartmentModel) => {


    return (
            <div>
                <ViewEditNewLayout>
                    <OkCancelButton />
                    <BasicInput label='Name' />
                </ViewEditNewLayout>
                <ViewEditNewLayout>
                    <OkCancelButton />
                    <div className='d-flex justify-content-between'>
                        <div className=' col-11 d-flex align-items-start p-0 text-start mb-2'>
                            <label className='form-label d-block col-1 me-5 pt-1 px-0 h-50 fw-bold mt-2'>State :</label>
                            <div className='bg-opacity-10 d-flex flex-wrap'>
                                {
                                    state.map((state, index) =>
                                        <Badge text={state.name} editMode={true} color={state.color} key={'state' + index} />
                                    )
                                }
                            </div>
                        </div>
                        <CreatNewButtonTitleless />
                    </div>
                </ViewEditNewLayout>
                <ViewEditNewLayout>
                    <OkCancelButton />
                    <div className='d-flex justify-content-between'>
                        <div className=' col-11 d-flex align-items-start p-0 text-start mb-2'>
                            <label className='form-label d-block col-1 me-5 pt-1 px-0 h-50 fw-bold mt-2'>Type :</label>
                            <div className='bg-opacity-10 d-flex flex-wrap'>
                                {
                                    type.map((type, index) =>
                                        <Badge text={type.name} editMode={true} color={type.color} key={'type' + index} />
                                    )
                                }
                            </div>
                        </div>
                        <CreatNewButtonTitleless />
                    </div>
                </ViewEditNewLayout>
                <ViewEditNewLayout>
                    <OkCancelButton />
                    <div className='d-flex justify-content-between'>
                        <div className=' col-11 d-flex align-items-start p-0 text-start mb-2'>
                            <label className='form-label d-block col-1 me-5 pt-1 px-0 h-50 fw-bold mt-2'>Tags :</label>
                            <div className='bg-opacity-10 d-flex flex-wrap'>
                                {
                                    tag.map((tag, index) =>
                                        <Badge text={tag.name} editMode={true} color={tag.color} key={'tag' + index} />
                                    )
                                }
                            </div>
                        </div>
                        <CreatNewButtonTitleless />
                    </div>
                </ViewEditNewLayout>
                <ViewEditNewLayout>
                    <OkCancelButton />
                    <div className='d-flex justify-content-between'>
                        <div className=' col-11 d-flex align-items-start p-0 text-start mb-2'>
                            <label className='form-label d-block col-1 me-5 pt-1 px-0 h-50 fw-bold mt-2'>Tags :</label>
                            <div className='bg-opacity-10 d-flex flex-wrap'>
                                {
                                    tickets.map((ticket, index) =>
                                        <Badge text={ticket.name} editMode={true} color={ticket.color} key={'ticket' + index} />
                                    )
                                }
                            </div>
                        </div>
                        <CreatNewButtonTitleless />
                    </div>
                    <ColorPicker/>
                </ViewEditNewLayout>
        </div>
    )
}

export default DepartmentEditMode