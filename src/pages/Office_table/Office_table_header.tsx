import React from 'react'
import CreatNewButton from '../../components/common/CreatNewButton'
import FilterButton from '../../components/common/FilterButton'
import Header_section from '../../components/common/Header_section'

type Props = {}

const Office_table_header = (props: Props) => {
    return (
        <React.Fragment>

            <div className="d-flex justify-content-between align-items-center">
                <Header_section title="Office" />
                <div className="d-flex">
                    <FilterButton />
                    <CreatNewButton text='Office' />
                </div>
            </div>

        </React.Fragment>
    )
}

export default Office_table_header