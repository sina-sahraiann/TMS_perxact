
import { useState } from 'react'
import Header_section from '../../components/common/Header_section'
import MainLayout from '../../components/layout/MainLayout'
import DepartmentViewMode from './DepartmentViewMode'
import DepartmentEditMode from './DepartmentEditMode'
import DepartmentModel from '../../models/Department'
import { DepartmentInfo } from '../../services/DepartmentData'
import ViewEditNewLayout from '../../components/layout/ViewEditNewLayout'

const DepartmentViewEditPage = () => {

  const [CurrentDepartment, setCurrentDepartment] = useState<DepartmentModel>(DepartmentInfo[0])

  const [EditMode, setEditMode] = useState(['d-none', ''])

  const onclick = () => {
    if (EditMode[0] = '') {
      setEditMode(['d-none', ''])
    } else {
      setEditMode(['', 'd-none'])
    }
  }

  return (
    <div>
      <MainLayout>
        <div className='d-flex justify-content-between'>
          <Header_section title='Department' related='/CAE' />
          <button className='h-25 border-0' onClick={onclick}>toggle</button>
        </div>
        
          <div className={EditMode[0]}>
            <DepartmentEditMode
              id={CurrentDepartment.id}
              name={CurrentDepartment.name}
              state={CurrentDepartment.state}
              type={CurrentDepartment.type}
              tag={CurrentDepartment.tag}
              tickets={CurrentDepartment.tickets}
            />
          </div>
          <div className={EditMode[1]}>
            <DepartmentViewMode
              id={CurrentDepartment.id}
              name={CurrentDepartment.name}
              state={CurrentDepartment.state}
              type={CurrentDepartment.type}
              tag={CurrentDepartment.tag}
              tickets={CurrentDepartment.tickets}

            />
          </div>

      </MainLayout>
    </div>
  )
}

export default DepartmentViewEditPage