import React from 'react'
import BasicInput from '../../components/common/BasicInput'
import SubmitButton from '../../components/common/SubmitButton'

const ResetPasswordForm = () => {
    return (
        <div>
            <form>
                <legend className='text-start my-3'>Reset Password</legend>
                <BasicInput label='Password' />
                <BasicInput label='Reset Password' />
                <SubmitButton label={'Reset Password'} />
            </form>
        </div>
    )
}

export default ResetPasswordForm