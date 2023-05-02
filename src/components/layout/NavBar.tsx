import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link, NavLink } from 'react-router-dom'
import '../../assets/style.css'
import Avatar from '../common/Avatar'
import SidebarLink from './SidebarLink'


type Props = {
    id: string
}

const NavBar = ({ id }: Props) => {
    const idTarget = '#' + id
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="container d-flex justify-content-md-between justify-content-start align-items-center">
                    <div className=' d-flex align-items-center me-4'>
                        <button className='d-sm-none btn btn-outline-dark me-3' data-bs-toggle="offcanvas" data-bs-target="#drawer">
                            <i className="ri-menu-line"></i>
                        </button>
                        <div className="input-group">
                            <button className="btn btn-outline-primary" type="button">
                                <i className="ri-search-line"></i>
                            </button>
                            <input type="text" className="form-control bg-transparent border-secondary border-opacity-50" placeholder="" />
                        </div>
                    </div>
                    <div className='d-none d-block'>
                        <Avatar id='123' image='https://randomuser.me/api/portraits/men/57.jpg' name='sina' />
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start p-0" id="drawer">
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title">LOGOS PLACE</h1>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body pt-0">
                    <div className="d-flex vh-75 flex-column rounded px-2 vh-100 justify-content-between align-items-center pb-4" >
                        <ul className='d-flex flex-column list-group'>
                            <div className="d-flex align-items-start ">
                            </div>
                            <SidebarLink title='Logo out' path="/">
                                <i className="ri-indent-decrease ri-lg me-3 text-end"></i>
                            </SidebarLink>
                            <SidebarLink title='Logo out' path="/">
                                <i className="ri-indent-decrease ri-lg me-3 text-end"></i>
                            </SidebarLink>
                            <SidebarLink title='Logo out' path="/">
                                <i className="ri-indent-decrease ri-lg me-3 text-end"></i>
                            </SidebarLink>
                        </ul>
                        <SidebarLink title='Logo out' path="/">
                            <i className="ri-indent-decrease ri-lg me-3 text-end"></i>
                        </SidebarLink>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default NavBar