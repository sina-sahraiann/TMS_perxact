import React from 'react'
import '../../assets/style.css'
import DashBoaredHeader from '../../pages/DashBoard/DashBoaredHeader'

const User_display_layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div style={{ zIndex:'1',backgroundColor:'#c4c4c4'}} className='d-flex container align-items-start mt-5'>
            <div className='d-flex flex-column mt-5 col container position-relative'>
                {children}
            </div>
        </div>
        </div >
    )
}

export default User_display_layout