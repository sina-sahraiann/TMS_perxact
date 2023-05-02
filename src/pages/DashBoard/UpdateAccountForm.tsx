import React from 'react'
import BasicInput from '../../components/common/BasicInput'
import SubmitButton from '../../components/common/SubmitButton'
import FileInput from '../../components/common/FileInput'


const UpdateAccountForm = () => {
    return (
        <div>
            <legend className='text-start my-3'>Account info</legend>
            <form>
                <BasicInput type={'text'} label={'Username'} value={'John.Doe'} />
                <BasicInput type={'email'} label={'Email'} value={'ali.gholami@percae.tech'} />
                <FileInput label='Update Profile Picture' />
                <SubmitButton label={'Update'} />
            </form>
        </div>
    )
}

export default UpdateAccountForm