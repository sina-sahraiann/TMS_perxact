
import { useState } from 'react'
import Header_section from '../../components/common/Header_section'
import MainLayout from '../../components/layout/MainLayout'
import OfficeViewMode from './OfficeViewMode'
import { office_list } from '../../services/office_list'
import single_office_model from '../../models/office'
import OfficeEditMode from './OfficeEditMode'
import ViewEditNewLayout from '../../components/layout/ViewEditNewLayout'

const OfficeViewEditPage = () => {

  const [CurrnetOffice, setCurrentOffice] = useState<single_office_model>(office_list[0])

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
          <Header_section title='Office' related='/Iran' />
          <button className='h-25 border-0' onClick={onclick}>toggle</button>
        </div>
        <ViewEditNewLayout>
          <div className='d-flex flex-column col position-relative container me-0 me-sm-4'>
            <div className={EditMode[1]}>
              <OfficeViewMode
                Office_id={CurrnetOffice.Office_id}
                Name={CurrnetOffice.Name}
                Location={CurrnetOffice.Location}
                Manager={CurrnetOffice.Manager}
                Members={CurrnetOffice.Members}
              />
            </div>
            <div className={EditMode[0]}>
              <OfficeEditMode
                Office_id={CurrnetOffice.Office_id}
                Name={CurrnetOffice.Name}
                Location={CurrnetOffice.Location}
                Manager={CurrnetOffice.Manager}
                Members={CurrnetOffice.Members}
              />
            </div>
          </div>
        </ViewEditNewLayout>
      </MainLayout>
    </div>
  )
}

export default OfficeViewEditPage