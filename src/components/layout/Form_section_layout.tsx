import React from "react"



const Form_section_layout
    = ({ children, title }:
        { children: React.ReactNode, title?: string }) => {
        return (<React.Fragment>
            <div className="container d-flex justify-content-start flex-column">
                <legend className='text-start my-3 fw-bolder'>{title}</legend>
                {children}
            </div>
        </React.Fragment>)
    }

export default Form_section_layout
