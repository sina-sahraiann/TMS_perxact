import React from 'react'
import MainLayout from '../../components/layout/MainLayout'
import Header_section from '../../components/common/Header_section'
import User_display_layout from '../../components/layout/User_display_layout'
import Big_profile_image from '../../components/common/Big_profile_image'
import 'bootstrap/dist/js/bootstrap.min.js'
import View_user_box_sm from './View_user_box_sm'
import View_user_box_lg from './View_user_box_lg'
import Edit_delete_button from '../../components/common/Edit_delete_button'


const View_single_user_page = () => {
    return (
        <React.Fragment>
            <MainLayout>
                <Header_section title='Users' related='/john doe' />
                <User_display_layout>
                    <div className='d-flex justify-content-end'>
                        <Edit_delete_button />
                    </div>
                    <Big_profile_image />

                    <div className='d-none d-xl-block pt-5'>
                        <View_user_box_lg />
                    </div>

                    <div className='d-xl-none pt-5'>
                        <View_user_box_sm />
                    </div>

                    <h1 className='opacity-75 mt-5'>
                        Actitvity
                    </h1>
                    <hr />

                </User_display_layout>
            </MainLayout>
        </React.Fragment>
    )
}

export default View_single_user_page