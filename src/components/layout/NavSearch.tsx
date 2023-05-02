import React from 'react'
import NavSearchType from '../../models/NavSearchType'
import 'bootstrap/dist/css/bootstrap.css'


const NavSearch = ({ title }: NavSearchType) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="h2 text-decoration-none">{title}</a>
                    <form className="d-flex input-group w-auto">
                        <input
                            type="search"
                            className="form-control rounded border-primary border-1"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search"></i>
                        </span>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavSearch