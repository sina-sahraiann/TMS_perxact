import React from 'react'
import BasicInput from '../../components/common/BasicInput'
import BasicLabelDesc from '../../components/common/BasicLabelDesc'
import single_office_model from '../../models/office'
import { userList } from '../../services/list_of_all_users'
import SingleEditBadge from './SingleEditBadge'

const NewDepartmentForm = () => {

    return (
        <div>
            <BasicInput label='Name'/>
            <SingleEditBadge label='State'/>
            <SingleEditBadge label='Types'/>
            <SingleEditBadge label='Tags'/>
            <SingleEditBadge label='Tickets'/>
        </div>
    )
}

export default NewDepartmentForm