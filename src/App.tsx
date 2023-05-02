import './App.css';
import HomePage from './pages/home/HomePage'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './pages/login/Login';
import { Routes, Route } from "react-router-dom";
import DashBoard from './pages/DashBoard/DashBoard';
import ErrorPage from './pages/error-page/ErrorPage';
import Users_list_page from './pages/Users_List/Users_list_page';
import User_edit_page from './pages/User_edit.tsx/User_edit_page';
import New_user_page from './pages/new _user/New_user_page';
import View_single_user_page from './pages/view_single_user/View_single_user_page';
import "bootstrap/dist/js/bootstrap.min.js";
import Office_table_page from './pages/Office_table/Office_table_page';
import OfficeViewEditPage from './pages/Office_View_Edit/OfficeViewEditPage';
import NewOfficePage from './pages/NewOffice/NewOfficePage';
import DepartmentEditMode from './pages/DepartmentViewEdit/DepartmentEditMode';
import DepartmentViewEditPage from './pages/DepartmentViewEdit/DepartmentViewEditPage';
import NewDepartmentPage from './pages/NewDepartment/NewDepartmentPage';
import DepartmentTablePage from './pages/DepartmentTable/DepartmentTablePage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='users' element={<Users_list_page />} />
        <Route path='login' element={<Login />} />
        <Route path='/' element={<HomePage />} />
        <Route path='dashboard' element={<DashBoard />} />
        <Route path='User_edit' element={<User_edit_page />} />
        <Route path='User_new' element={<New_user_page />} />
        <Route path='View_single_user' element={<View_single_user_page />} />
        <Route path='office_table' element={<Office_table_page />} />
        <Route path='view_office' element={<OfficeViewEditPage />} />
        <Route path='NewOffice' element={<NewOfficePage />} />
        <Route path='DepartmentViewEdit' element={<DepartmentViewEditPage />} />
        <Route path='NewDepartment' element={<NewDepartmentPage />} />
        <Route path='DepartmentTablePage' element={<DepartmentTablePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
