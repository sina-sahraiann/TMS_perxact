import React from 'react'


const CreatNewButton = ({ text }: { text: string }) => {
    return (
        <button className="btn btn-outline-primary mx-2 d-flex align_items_center">
            <span className='d-none d-md-inline'>Create New {text}</span>
            <i className="ri-add-circle-fill ms-md-2 h4 mb-0"></i>
        </button>)
}

export default CreatNewButton