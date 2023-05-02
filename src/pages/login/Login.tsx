import React from 'react'
import logo from '../../assets/logo.png'
import BasicInput from '../../components/common/BasicInput'
import CheckInput from '../../components/common/CheckInput'
import SubmitButton from '../../components/common/SubmitButton'


const Login = () => {
    return (
        <div className='container border border-striped border-1 col-md-6 offset-md-3'>
            <img src={logo} alt="not found" className='' />
            <form className='mt-4 shadow-lg'>
                <div className="card p-4">
                    <div className="card-body mt-2 p-5">
                        <div className="form-check text-start mb-3 p-0">
                            <label className='form-label' htmlFor='email'>Email address :</label>
                            <input className='form-control border-0 bg-secondary bg-opacity-10' type='email' name='email' />
                        </div>
                        <div className="form-check text-start mb-3 p-0">
                            <label className='form-label' htmlFor='pass'>Password :</label>
                            <input className='form-control border-0 bg-secondary bg-opacity-10' type='password' name='pass' />
                        </div>
                        <div className='text-start my-4 '>
                            <div className="form-check">
                                <input className="form-check-input border border-2" type='checkbox' />
                                <label className="form-check-label">Remember me</label>
                            </div>
                        </div>
                        <div>
                            <input className='w-100 btn-secondary border-0' value="Login" type="submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login