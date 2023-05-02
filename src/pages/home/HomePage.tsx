import 'bootstrap/dist/css/bootstrap.css'
import React, {  useState } from 'react'
import EachProject from './EachProject'
import NavSearch from '../../components/layout/NavSearch'
import ProjectList from './ProjectList'
import MainLayout from '../../components/layout/MainLayout'
import Header_section from '../../components/common/Header_section'



const HomePage = () => {

  return (
    <MainLayout>
      <div>
        <Header_section title='Projects' />
        <ProjectList />
      </div>
    </MainLayout>
  )
}

export default HomePage;
