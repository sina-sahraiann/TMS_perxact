import React, { useState } from 'react'
import HomePage from '../../pages/home/HomePage'
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.css'
import Login from '../../pages/login/Login'
import DashBoard from '../../pages/DashBoard/DashBoard'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Sidebar from './Sidebar'
import "../../assets/style.css"

type classToggleType = {
  sidetoggle: {
    hide: string,
    margin: string

  },
  navbarToggle: string,
  mainsectionToggle: string
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {

  const [toggleClass, setToggleClass] = useState<classToggleType>(
    {
      sidetoggle: {
        hide: '',
        margin: ''
      },
      navbarToggle: '',
      mainsectionToggle: ''
    }
  )

  const onClick = () => {
    if (toggleClass.sidetoggle.hide == '') {
      setToggleClass({
        sidetoggle: {
          hide: 'd-none',
          margin: 'sidenav-toggle'
        },
        navbarToggle: 'header-section-toggle',
        mainsectionToggle: 'main-section-toggle container'
      }
      )

    } else {
      setToggleClass({

        sidetoggle: {
          hide: '',
          margin: ''
        },
        navbarToggle: 'header-section',
        mainsectionToggle: 'container main-section'
      }
      )
    }
  }


  return (
    <React.Fragment>
      <div className='container'>
        <Sidebar toggleClass={toggleClass.sidetoggle} onClick={onClick} />

        <div className=''>
          <header className='header-section'>
            <NavBar id={'upNav'} />
          </header>
          <main style={{ marginTop: '100px' }} className='container mx-sm-5'>
            {children}
          </main>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MainLayout