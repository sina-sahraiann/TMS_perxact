import React from 'react'


const FilterButton = () => {
    return (
        <button className="btn btn-outline-primary mx-2 d-flex align_items_center">
            <span className='d-none d-md-inline'>Filter</span>
            <i className="ri-filter-2-fill ms-md-2 h4 mb-0"></i>
        </button>
    )
}

export default FilterButton