import React from "react"


const Header_section = ({ title, related ,related2 }: { title: string, related?: string , related2?:string }) => {
    return (
        <React.Fragment>
            <div className="text-start my-3">
                <h2 className="d-inline fw-bolder opacity-75">{title}</h2>
                <h5 className="d-inline">{related}</h5>
                <h5 className="d-inline">{related2}</h5>
            </div>
        </React.Fragment>
    )
}

export default Header_section