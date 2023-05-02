import { Link } from "react-router-dom"
import Avatar from "../../components/common/Avatar"
import Edit_delete_button from "../../components/common/Edit_delete_button"
import UserInfoModel from "../../models/user"
const officeCont: string[] = [
    'Iran',
    'Germany'
]

const Each_user_row = ({
    userId, Avatarimage, username, email, DateAdd, role, officeID
}: UserInfoModel) => {

    return (
        <tr>
            <td><Avatar image={Avatarimage} name={username} id={userId} /> </td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{DateAdd.getFullYear()}</td>
            <td>{role}</td>
            <td>{officeCont[officeID]}</td>
            <td>
                <Edit_delete_button/>
            </td>
        </tr>
    )
}

export default Each_user_row

