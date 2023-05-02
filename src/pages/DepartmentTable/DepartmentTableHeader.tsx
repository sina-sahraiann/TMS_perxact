import React from 'react'
import CreatNewButton from '../../components/common/CreatNewButton'
import FilterButton from '../../components/common/FilterButton'
import Header_section from '../../components/common/Header_section'


const DepartmentTableHeader = () => {
    return (
        <React.Fragment>

            <div className="d-flex justify-content-between align-items-center">
                <Header_section title="Department" />
                <div className="d-flex">
                   <FilterButton/>
                   <CreatNewButton text='Department' />
                </div>
            </div>

        </React.Fragment>
    )
}

export default DepartmentTableHeader