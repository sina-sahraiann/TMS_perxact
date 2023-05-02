import { stringify } from "querystring"
import { Link } from "react-router-dom"
import Avatar from "../../components/common/Avatar"
import BasicLabelDesc from "../../components/common/BasicLabelDesc"
import Edit_delete_button from "../../components/common/Edit_delete_button"
import UserInfoModel from "../../models/user"
const officeCont: string[] = [
    'Iran',
    'Germany'
]

const Each_User_Card = ({
    userId, Avatarimage, username, email, DateAdd, role, officeID
}: UserInfoModel) => {

    return (
        <div>
            <div className="card mb-3 card-color">
                <div className="card-body text-start">
                    <div className='d-flex justify-content-end mb-4 pb-4 py-2'>
                        <Edit_delete_button />
                    </div>
                    <div className="d-flex align-items-center mb-3 position-absolute top-0 start-0 ps-4 py-4">
                        <img className='w-25 rounded-circle me-3' src={Avatarimage} alt='' />
                        <h3>{username}</h3>
                    </div>
                    <BasicLabelDesc label="Email " value={email} />
                    <BasicLabelDesc label="Role " value={role} />
                    <BasicLabelDesc label="Office " value={officeCont[officeID]} />
                    <BasicLabelDesc label="Createat" value={'jan 7 2011'} />
                </div>
            </div>
        </div>
    )
}

export default Each_User_Card

