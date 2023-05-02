import React from "react"
import Table_header from "../../components/common/Table_header"
import Table_layout from "../../components/layout/Table_layout"
import UserInfoModel from "../../models/user"
import { userInfo } from "os"
import Each_user_row from "./Each_user_row"
import Each_User_Card from "./Each_User_Card"

const User_whole_table = ({ useInfo }: { useInfo: UserInfoModel[] }) => {

    return (
        <React.Fragment>
            <div className="d-md-block d-none">
                <Table_layout>
                    <thead>
                        <tr>
                            <Table_header> </Table_header>
                            <Table_header>Username</Table_header>
                            <Table_header>Email</Table_header>
                            <Table_header>Createat</Table_header>
                            <Table_header>Role</Table_header>
                            <Table_header>Office</Table_header>
                            <Table_header> </Table_header>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            useInfo.map((user: UserInfoModel, index) => (
                                <Each_user_row
                                    key={'Each_User' + index}
                                    userId={user.userId}
                                    Avatarimage={user.Avatarimage}
                                    username={user.username}
                                    email={user.email}
                                    DateAdd={user.DateAdd}
                                    role={user.role}
                                    officeID={user.officeID}
                                />
                            ))
                        }
                    </tbody>
                </Table_layout>
            </div>
            <div className="d-md-none">
                {
                    useInfo.map((user: UserInfoModel, index) => (
                        <Each_User_Card
                            key={'Each_User' + index}
                            userId={user.userId}
                            Avatarimage={user.Avatarimage}
                            username={user.username}
                            email={user.email}
                            DateAdd={user.DateAdd}
                            role={user.role}
                            officeID={user.officeID}
                        />
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default User_whole_table