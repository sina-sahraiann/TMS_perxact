import React from "react"


const Form_select = ({ children, title }
    : { children: React.ReactNode, title?: string }) => {
    return (
        <React.Fragment>
            <div className='form-check col-12 col-md-10 d-flex align-items-center p-0 text-start justify-content-between mb-3'>
                <label className="form-label col-2 me-3">
                    {title + ' :'}
                </label>
                <select name='Role' className="form-select">
                    {children}
                </select>
            </div>
        </React.Fragment>
    )
}

export default Form_select