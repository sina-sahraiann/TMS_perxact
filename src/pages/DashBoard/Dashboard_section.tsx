import React from "react"
import BasicInput from "../../components/common/BasicInput"
import FileInput from "../../components/common/FileInput"
import SubmitButton from "../../components/common/SubmitButton"


const DashBoard_section = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return (<React.Fragment>
        <div className="container d-flex justify-content-start flex-column">
            <legend className='text-start my-3 fw-bolder'>{title}</legend>
            {children}
        </div>
    </React.Fragment>)
}

export default DashBoard_section