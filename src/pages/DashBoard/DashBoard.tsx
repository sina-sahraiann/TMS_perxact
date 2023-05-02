import MainLayout from '../../components/layout/MainLayout'
import { Outlet } from 'react-router-dom'
import DashBoard_section from './Dashboard_section'
import BasicInput from '../../components/common/BasicInput'
import FileInput from '../../components/common/FileInput'
import SubmitButton from '../../components/common/SubmitButton'
import Header_section from '../../components/common/Header_section'
import User_display_layout from '../../components/layout/User_display_layout'
import Form_section_layout from '../../components/layout/Form_section_layout'
import Big_profile_image from '../../components/common/Big_profile_image'
import OkCancelButton from '../../components/common/OkCancelButton'

const DashBoard = () => {
  return (
    <MainLayout>
      <Header_section title='Profile' />


      <User_display_layout>
        <OkCancelButton />
        <Big_profile_image />
        <Form_section_layout title='Account Info'>
          <BasicInput type={'text'} label={'Username'} value={'John.Doe'} />
          <BasicInput type={'email'} label={'Email'} value={'ali.gholami@percae.tech'} />
          <BasicInput type={'text'} label={'Firstname'} value={'John'} />
          <BasicInput type={'text'} label={'Lastname'} value={'Doe'} />
          <BasicInput type={'text'} label={'Phone'} value={'09025422471'} />
        </Form_section_layout>
        <Form_section_layout title='Change Password'>
          <form>
            <div className="form-check d-flex w-100 col-10 align-items-center p-0 text-start">
              <label className='form-label col-2 me-5' htmlFor='pass'>Password</label>
              <input className='form-control border border-1 border-dark mb-2 border-opacity-75 fw-bold' type='password' name='pass' />
            </div>
            <div className="form-check d-flex w-100 col-10 align-items-center p-0 text-start">
              <label className='form-label col-2 me-5' htmlFor='passcon'>Confirm Password</label>
              <input className='form-control border border-1 border-dark mb-2 border-opacity-75 fw-bold' type='password' name='passcon' />
            </div>
          </form>
        </Form_section_layout>
        <Form_section_layout title='Update Profile Picture'>
          <FileInput label='Choose picture' />
        </Form_section_layout>
      </User_display_layout>
    </MainLayout>
  )
}

export default DashBoard