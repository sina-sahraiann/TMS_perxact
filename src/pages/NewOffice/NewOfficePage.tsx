
import Header_section from '../../components/common/Header_section'
import OkCancelButton from '../../components/common/OkCancelButton'
import MainLayout from '../../components/layout/MainLayout'
import ViewEditNewLayout from '../../components/layout/ViewEditNewLayout'
import NewOfficeForm from './NewOfficeForm'

const NewOfficePage = () => {

  return (
    <div>
      <MainLayout>
        <Header_section title='Office' related='/new' />
        <ViewEditNewLayout>
          <div className='d-flex flex-column col container position-relative'>
            <OkCancelButton/>
            <NewOfficeForm />
          </div>
        </ViewEditNewLayout>
      </MainLayout>
    </div>
  )
}

export default NewOfficePage