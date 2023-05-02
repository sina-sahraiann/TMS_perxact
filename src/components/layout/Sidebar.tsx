import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import 'bootstrap/dist/js/bootstrap.min.js'
import SidebarLink from "./SidebarLink"

let xtoplus : boolean = true

const Sidebar = ({ onClick, toggleClass }: {
  onClick: () => (void),
  toggleClass: {
    hide: string,
    margin: string
  }

}) => {

  return (
    <React.Fragment>
      <div className="d-flex sidenav flex-column-reverse align-items-center border-dark border-1  border d-none d-sm-block">
        <div id="demo" className="d-flex flex-column rounded  h-100 justify-content-between align-items-center pb-4" >

          <ul className='d-flex flex-column list-group w-100 justify-content-end align-items-center mb-3'>
            <div className="d-flex align-items-start mb-3">
              <a onClick={onClick} className="btn text-decoration-none text-dark" >
                {xtoplus ? <h4><i className="fa-solid fa-plus"></i></h4> :
                <h4><i className="fa-solid fa-xmark"></i></h4>}
              </a>
            </div>
            <SidebarLink title='Projects' path="/" classToggle={toggleClass}>
              <i className="fa-solid fa-bars-progress"></i>
            </SidebarLink>
            <SidebarLink title='Office' path="/" classToggle={toggleClass}>
              <i className="fa-solid fa-building"></i>
            </SidebarLink>
            <SidebarLink title='Departments' path="/" classToggle={toggleClass}>
              <i className="fa-solid fa-building-flag"></i>
            </SidebarLink>
            <SidebarLink title='Users' path="/" classToggle={toggleClass}>
              <i className="fa-solid fa-user-group"></i>
            </SidebarLink>
          </ul>
          <SidebarLink title='Logo out' path="/" classToggle={toggleClass}>
            <i className="fa-solid fa-right-from-bracket"></i>
          </SidebarLink>
        </div>
      </div>
    </React.Fragment>
  )
}
{/* <i class="fa-solid fa-building"></i>
<i class="fa-solid fa-user"></i>
 */}
export default Sidebar