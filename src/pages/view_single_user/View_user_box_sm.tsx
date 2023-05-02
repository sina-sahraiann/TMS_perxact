import React from 'react'
import BasicInput from '../../components/common/BasicInput'
import Form_section_layout from '../../components/layout/Form_section_layout'
import BasicLabelDesc from '../../components/common/BasicLabelDesc'

type Props = {}

const View_user_box_sm = (props: Props) => {
    return (
        <React.Fragment>
            <Form_section_layout>
                <BasicLabelDesc label='Username' value='sina' />
                <BasicLabelDesc label='Email' value='ali.gholami@percae.tech' />
                <BasicLabelDesc label='Firstname' value='John' />
                <BasicLabelDesc label='Lastname' value='Doewerson' />
                <BasicLabelDesc label='Phone' value='09025422471' />
                <BasicLabelDesc label='Createat' value='17 jan 2022' />
                <BasicInput type={'text'} label={'Role'} value={'User'} />
                <BasicInput type={'password'} label={'Password'} value={'3454345'} />
                <BasicInput type={'text'} label={'Lastname'} value={'Doe'} />
                <BasicInput type={'text'} label={'Department'} value={'IT'} />
            </Form_section_layout>
        </React.Fragment>
    )
}

export default View_user_box_sm