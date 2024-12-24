import React from 'react'
import { TbReload } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";
import { MdPushPin } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import "./Header.scss"

function Header() {
  return (
    <header>
        <div className="container">
            <nav className="navbar">
                <div className="navbar__logo">
                    <h1>Wheather</h1>
                </div>
                <div className='navbar__icons'>
                    <TbReload/>
                    <IoIosStarOutline/>
                    <MdPushPin/>
                    <FiSun/>
                    <FiMoreHorizontal/>
                    <form className='navbar__inputs'>
                        <input type="search" placeholder='Search'/>
                        <FaSearch/>
                    </form>
                </div>

            </nav>
        </div>
    </header>
  )
}

export default Header