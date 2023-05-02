import React from 'react'
import Form_section_layout from '../../components/layout/Form_section_layout'
import BasicInput from '../../components/common/BasicInput'
import BasicLabelDesc from '../../components/common/BasicLabelDesc'

type Props = {}

const View_user_box_lg = (props: Props) => {
    return (
        <React.Fragment>
            <div className="d-flex flex-column flex-xl-row">
                <Form_section_layout>
                    <BasicLabelDesc label='Username' value='sina' />
                    <BasicLabelDesc label='Firstname' value='John' />
                    <BasicLabelDesc label='Phone' value='09025422471' />
                    <BasicInput type={'text'} label={'Role'} value={'User'} />
                    <BasicInput type={'text'} label={'Lastname'} value={'Doe'} />

                </Form_section_layout>
                <Form_section_layout>
                    <BasicLabelDesc label='Email' value='ali.gholami@percae.tech' />
                    <BasicLabelDesc label='Lastname' value='Doewerson' />
                    <BasicLabelDesc label='Createat' value='17 jan 2022' />
                    <BasicInput type={'password'} label={'Password'} value={'3454345'} />
                    <BasicInput type={'text'} label={'Department'} value={'IT'} />
                </Form_section_layout >
            </div>
        </React.Fragment>
    )
}

export default View_user_box_lg