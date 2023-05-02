import React, { useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import single_office_model from '../../models/office'
import Office_table_header from './Office_table_header'
import { office_list } from '../../services/office_list'
import Office_whole_table from './Office_whole_table'

const Office_table_page = () => {

    const [officeList , setOfficeList ] = useState<single_office_model[]>(office_list)
    console.log(officeList);
    

    return (
        <React.Fragment>
            <MainLayout>
                <Office_table_header/>
                <Office_whole_table officelist={officeList} />
            </MainLayout>
        </React.Fragment>
    )
}

export default Office_table_page