import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    const NavLinks = <>
        <NavLink className="navHoverClass" to='/'>Home</NavLink>
        <NavLink className="navHoverClass" to='/available-foods'>Available Foods</NavLink>
        <NavLink className="navHoverClass" to='/add-food'>Add Food</NavLink>
        <NavLink className="navHoverClass" to='/my-foods'>Manage My Foods</NavLink>
        <NavLink className="navHoverClass" to='/food-requests'>My Food Requests</NavLink>
        <NavLink className="navHoverClass" to='/login'>Login</NavLink>
    </>
    const [isChecked, setIsChecked] = useState(false);

    const toggleIcons = () => {
        setIsChecked(!isChecked);
    };

    
    return (
        <div>
            <div className="navbar bg-base-100 max-w-[1240px] mx-auto justify-evenly flex-col sm:flex-row my-[30px]">
                <div className="navbar-start flex justify-center w-full sm:w-1/3 sm:justify-start">
                    <Link>
                        <img className="max-h-[100px]" src="https://i.ibb.co/ykvfqf8/share-food-logo.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="nav-active menu menu-horizontal px-1 text-[18px] font-semibold text-[#444444] space-x-10">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end flex justify-center sm:justify-end">
                    <a className="btn bg-transparent border-[#FF3811] text-[#FF3811] hover:border-[#FF3811]">Appointment</a>
                    <details className="dropdown dropdown-bottom dropdown-end lg:hidden">
                        <summary className="m-1 btn btn-circle swap swap-rotate" onClick={toggleIcons}>

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" />

                            {/* hamburger icon */}
                            <svg className={`swap-off fill-current ${isChecked ? 'swap-on' : 'swap-off'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 512 512"
                            >
                                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                            </svg>

                            {/* close icon */}
                            <svg className={` fill-current ${isChecked ? 'swap-off' : 'swap-on'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 512 512"
                            >
                                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                        </summary>
                        <ul tabIndex={0} className="nav-active menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default NavBar;