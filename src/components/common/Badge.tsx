import { useState } from "react"
import { Style } from "util"

const Badge = ({ text, color, editMode }: { text: string, color: string, editMode?: boolean }) => {


    const style = ['badge m-2 p-2 d-flex position-relative text-light',
        ' m-2 p-1 badge d-flex position-relative bg-transparent border-3']

    const display = [' block ', ' none ']
    return (
        <div style={{ backgroundColor: color, color: color, borderColor: color, borderStyle: 'solid' }}
            className='badge m-2 p-2 d-flex position-relative text-light text-center'>
            {text}
            <a style={{ position: 'absolute', top: '-5px', right: '-5px', display: editMode ? display[0] : display[1] }}
                href="*" className={"border-0 rounded-circle bg-transparent badge-remove-btn " + editMode ? display[0] : display[1]}>
                <i className="fa-solid text-danger fa-circle-minus"></i>
            </a>
        </div>
    )
}

export default Badge