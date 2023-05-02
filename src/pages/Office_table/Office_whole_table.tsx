import React from 'react'
import Table_header from '../../components/common/Table_header'
import Table_layout from '../../components/layout/Table_layout'
import single_office_model from '../../models/office'
import Each_office from './Each_office'
import { userList } from '../../services/list_of_all_users'
import Each_office_card from './Each_office_card'

const Office_whole_table = ({ officelist }: { officelist: single_office_model[] }) => {


    return (
        <div>
            <div className='d-sm-block d-none'>
                <Table_layout>
                    <thead className='text-start'>
                        <tr>
                            <Table_header>Name</Table_header>
                            <Table_header>Manager</Table_header>
                            <Table_header>Location</Table_header>
                            <Table_header>Members</Table_header>
                            <Table_header> </Table_header>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            officelist.map((office, index) =>
                                <Each_office
                                    key={"eachOffice" + index}
                                    Name={office.Name}
                                    Manager={office.Manager}
                                    Location={office.Location}
                                    Members={office.Members}
                                    Office_id={office.Office_id}
                                />
                            )
                        }
                    </tbody>
                </Table_layout>
            </div>
            <div className="d-sm-none">
                {
                    officelist.map((office, index) =>
                        <Each_office_card
                            key={"eachOffi" + index}
                            Name={office.Name}
                            Manager={office.Manager}
                            Location={office.Location}
                            Members={office.Members}
                            Office_id={office.Office_id}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Office_whole_table