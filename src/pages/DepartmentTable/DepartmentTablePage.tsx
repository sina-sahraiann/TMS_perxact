import React, { useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import DepartmentTableHeader from './DepartmentTableHeader'
import DepartmentWholeTable from './DepartmentWholeTable'
import { DepartmentInfo } from '../../services/DepartmentData'
import DepartmentModel from '../../models/Department'

const DepartmentTablePage = () => {

    const [DepartmentList, setDepartmentList] = useState<DepartmentModel[]>(DepartmentInfo)

    return (
        <React.Fragment>
            <MainLayout>
                <DepartmentTableHeader />
                <DepartmentWholeTable DepartmentList={DepartmentList}/>
            </MainLayout>
        </React.Fragment>
    )
}

export default DepartmentTablePage