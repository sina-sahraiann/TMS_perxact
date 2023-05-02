import Table_header from '../../components/common/Table_header'
import Table_layout from '../../components/layout/Table_layout'
import DepartmentModel from '../../models/Department';
import EachDepartmentCard from './EachDepartmentCard';
import EachDepartmentRow from './EachDepartmentRow';
import EachDepartment from './EachDepartmentRow';

const DepartmentWholeTable = ({ DepartmentList }: { DepartmentList: DepartmentModel[] }) => {


    return (
        <div>
            <div className='d-sm-block d-none'>
                <Table_layout>
                    <thead className='text-center'>
                        <tr>
                            <Table_header>Name</Table_header>
                            <Table_header>State</Table_header>
                            <Table_header>Type</Table_header>
                            <Table_header>Tags</Table_header>
                            <Table_header>Tickets</Table_header>
                            <Table_header> </Table_header>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            DepartmentList.map((department) =>
                                <EachDepartmentRow
                                    id={department.id}
                                    name={department.name}
                                    type={department.type}
                                    state={department.state}
                                    tag={department.tag}
                                    tickets={department.tickets}

                                />
                            )
                        }
                    </tbody>
                </Table_layout>
            </div>
            <div className="d-sm-none">
                {
                    DepartmentList.map((department) =>
                        <EachDepartmentCard
                            id={department.id}
                            name={department.name}
                            type={department.type}
                            state={department.state}
                            tag={department.tag}
                            tickets={department.tickets}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default DepartmentWholeTable