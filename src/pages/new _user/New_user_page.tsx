import BasicInput from "../../components/common/BasicInput"
import Big_profile_image from "../../components/common/Big_profile_image"
import Form_select from "../../components/common/Form_select"
import Header_section from "../../components/common/Header_section"
import Form_section_layout from "../../components/layout/Form_section_layout"
import MainLayout from "../../components/layout/MainLayout"
import User_display_layout from "../../components/layout/User_display_layout"



const New_user_page = () => {
    return (
        <MainLayout>
            <Header_section title='Users' related='/ john doe' related2='/ edit' />
            <User_display_layout>
                <div className='d-flex justify-content-end col-12 col-sm-10 mb-3'>
                    <button className='btn btn-outline-danger border-2'>
                        <span>Cancel</span>
                        <i className='fa-solid fa-xmark ms-2'></i>
                    </button>
                    <button className='btn btn-outline-success ms-3 border-2'>
                        <span>Okay</span>
                        <i className='fa-solid fa-check ms-2'></i>
                    </button>
                </div>
                <Big_profile_image />
                <Form_section_layout>
                    <BasicInput type={'text'} label={'Username'} />
                    <BasicInput type={'email'} label={'Email'} />
                    <BasicInput type={'text'} label={'Firstname'} />
                    <BasicInput type={'text'} label={'Lastname'} />
                    <BasicInput type={'text'} label={'Phone'} />
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

export default New_user_page