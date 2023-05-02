import { Link, NavLink } from "react-router-dom"

interface props {
  title: string,
  classToggle?: {
    hide: string,
    margin: string
  },
  path: string,
  children: React.ReactNode
}

const SidebarLink = ({ title, classToggle, path, children }: props) => {
  return (
    <li className='list-group-item p-0 mb-3 w-100 bg-transparent border-0'>
      <NavLink className='my-2 text-decoration-none text-dark  justify-content-between justify-content-center text-opacity-75 d-flex align-items-center ' to={path}>
        <span className='d-none col-6'>{title}</span>
        <div className="col-6 ms-3">{children}</div>
      </NavLink>
    </li>
  )
}

export default SidebarLink