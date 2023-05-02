import React from 'react'


const BadgeContainer = ({ children, text }: { children: React.ReactNode, text: string }) => {
    return (
        <>
            <div className=' col-10 d-flex align-items-start p-0 text-start my-1'>
                <label className='form-label d-block col-1 me-5 pt-1 px-0 fw-bold'>{text}</label>
                <div className='bg-opacity-10 d-flex flex-wrap'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default BadgeContainer