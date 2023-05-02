import React from "react"


const Table_layout = ({children} : {children:React.ReactNode}) => {
    return (
        <React.Fragment>
            <table className='table table-striped table-borderless table-hover'>
                {children}
            </table>
        </React.Fragment>
    )
}

export default Table_layout