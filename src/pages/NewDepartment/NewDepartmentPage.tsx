
import Header_section from '../../components/common/Header_section'
import OkCancelButton from '../../components/common/OkCancelButton'
import MainLayout from '../../components/layout/MainLayout'
import ViewEditNewLayout from '../../components/layout/ViewEditNewLayout'
import NewDepartmentForm from './NewDepartmentForm'

const NewDepartmentPage = () => {

    return (
        <div>
            <MainLayout>
                <Header_section title='Department' related='/new' />
                <ViewEditNewLayout>
                    <div className='d-flex flex-column col container position-relative'>
                        <OkCancelButton />
                        <NewDepartmentForm />
                    </div>
                </ViewEditNewLayout>
            </MainLayout>
        </div>
    )
}

export default NewDepartmentPage