import { Style } from "util"


const StateBadge = ({ text }: { text: string }) => {
    return (
        <span className='badge m-2 p-2 d-flex position-relative bg-danger'>
            {text}
            <a style={{ position: 'absolute', top: '-5px', right: '-5px' }}
                href="*" className="border-0 rounded-circle bg-transparent badge-remove-btn">
                <i className="fa-solid text-danger fa-circle-minus"></i>
            </a>
        </span>
    )
}

export default StateBadge