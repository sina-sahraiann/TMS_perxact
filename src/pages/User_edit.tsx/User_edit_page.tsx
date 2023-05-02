import MainLayout from '../../components/layout/MainLayout'
import { Outlet } from 'react-router-dom'
import BasicInput from '../../components/common/BasicInput'
import FileInput from '../../components/common/FileInput'
import SubmitButton from '../../components/common/SubmitButton'
import Header_section from '../../components/common/Header_section'
import User_display_layout from '../../components/layout/User_display_layout'
import Form_section_layout from '../../components/layout/Form_section_layout'
import Big_profile_image from '../../components/common/Big_profile_image'
import '../../assets/style.css'
import Form_select from '../../components/common/Form_select'
import OkCancelButton from '../../components/common/OkCancelButton'


const User_edit_page = () => {
    return (
        <MainLayout>
            <Header_section title='Users' related='/ john doe' related2='/ edit' />
            <User_display_layout>
                <OkCancelButton/>
                <Big_profile_image />
                <Form_section_layout>
                    <BasicInput type={'text'} label={'Username'} value={'John.Doe'} />
                    <BasicInput type={'email'} label={'Email'} value={'ali.gholami@percae.tech'} />
                    <BasicInput type={'text'} label={'Firstname'} value={'John'} />
                    <BasicInput type={'text'} label={'Lastname'} value={'Doe'} />
                    <BasicInput type={'text'} label={'Phone'} value={'09025422471'} />
                    <Form_select title='Role'>
                        <option>Users</option>
                        <option>Admin</option>
                        <option>Manager</option>
                    </Form_select>
                    <Form_select title='Office'>
                        <option>Germany</option>
                        <option>Iran</option>
                    </Form_select>
                    <Form_select title='Department'>
                        <option>IT</option>
                        <option>Cae</option>
                    </Form_select>
                    <div className="form-check  col-12 col-md-10 d-flex align-items-center p-0 text-start justify-content-between">
                        <label className='form-label col-2' htmlFor='pass'>Password</label>
                        <input className='form-control border border-1 border-dark mb-2 border-opacity-75 fw-bold' type='password' name='pass' />
                    </div>
                </Form_section_layout>
            </User_display_layout>
        </MainLayout>
    )
}

export default User_edit_page