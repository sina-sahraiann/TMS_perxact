import React, { useState } from 'react'

import EachProject from './EachProject'
import { PROJECTS_LIST } from '../../services/DataServices';
import Table_layout from '../../components/layout/Table_layout';


const ProjectList = () => {
    const [projectList, setProjectList] = useState(PROJECTS_LIST);

    return (
        <React.Fragment>
            <Table_layout>
                <thead>
                    <tr className='text-center'>
                        <th className='col'>#</th>
                        <th className='col'>Name</th>
                        <th className='col'>Status</th>
                        <th className='col'>#Tasks</th>
                        <th className='col-5'>Members</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody className='text-start'>
                    <EachProject />
                </tbody>
            </Table_layout>
        </React.Fragment>
    )
}

export default ProjectList