import { useState } from "react";
import Header_section from "../../components/common/Header_section";
import Table_header from "../../components/common/Table_header";
import MainLayout from "../../components/layout/MainLayout"
import Table_layout from "../../components/layout/Table_layout";
import { userList } from '../../services/list_of_all_users'
import User_whole_table from "./User_whole_table";
import UserInfoModel from "../../models/user";
import FilterButton from "../../components/common/FilterButton";
import CreatNewButton from "../../components/common/CreatNewButton";


const Users_list_page = () => {


    const [usersinfo_State, setUserinfo_state] = useState<UserInfoModel[]>(userList)


    return (
        <MainLayout>
            <div className="d-flex justify-content-between align-items-center me-4">
                <Header_section title="Users" />
                <div className="d-flex">
                   <FilterButton/>
                    <CreatNewButton text="User"/>
                </div>
            </div>
            <User_whole_table useInfo={usersinfo_State} />
        </MainLayout>
    )
}

export default Users_list_page;