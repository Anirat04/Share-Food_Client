import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css';
import { ProviderContext } from "../../Provider/Provider";

const NavBar = () => {
    const { user, logOut, loading } = useContext(ProviderContext)
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const NavLinks = <>
        <NavLink className="navHoverClass" to='/'>Home</NavLink>
        <NavLink className="navHoverClass" to='/available-foods'>Available Foods</NavLink>
        <NavLink className="navHoverClass" to='/add-food'>Add Food</NavLink>
        {user ? <NavLink className="navHoverClass" to='/my-foods'>Manage My Foods</NavLink> : <></>}
        <NavLink className="navHoverClass" to='/myFoodRequests'>My Food Requests</NavLink>
        {/* <NavLink className="navHoverClass" to='/login'>Login</NavLink> */}
    </>
    const [isChecked, setIsChecked] = useState(false);

    const toggleIcons = () => {
        setIsChecked(!isChecked);
    };

    // this event handler is to log out users from the server
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged out')
            })
            .catch(error => console.log('error logging out', error))
    }


    // Dark mode theme application
    const handleToggle = (event) => {
        if (event.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light");
        }
    }
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])


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
                    <label className="swap swap-rotate pl-5">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleToggle} />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                    <div className="ml-[10px] border border-black rounded-full">
                        {
                            user ? <div className="bg-white flex flex-row-reverse items-center gap-3 rounded-full">
                                <Link className="border border-black rounded-full bg-base-300">
                                    <img className="max-w-[45px] min-h-[45px] rounded-full" src={user.photoURL ? user.photoURL : 'https://i.ibb.co/N7JQLnY/user-default-image.jpg'} alt="" />
                                </Link>
                                <p className="pl-[15px] font-bold">{user.displayName ? user.displayName : "userName_null"}</p>
                            </div>
                                :
                                <div className=" bg-base-300 flex flex-row-reverse items-center gap-5 rounded-full">
                                    <Link className="border border-black rounded-full bg-base-300">
                                        <img className="max-w-[45px] min-h-[45px] rounded-full" src='https://i.ibb.co/N7JQLnY/user-default-image.jpg' alt="" />
                                    </Link>
                                    <p className="pl-[20px] font-bold">No User</p>
                                </div>
                        }
                    </div>
                    <div className="ml-[10px]">
                        {
                            loading ? <>
                            </>
                                : <>
                                    {
                                        user ? <>
                                            <button
                                                className="btn text-white bg-[#23aade] rounded-lg hover:bg-transparent hover:border-[#23aade] hover:text-[#23aade]"
                                                onClick={handleLogOut}
                                            >
                                                Logout
                                            </button>
                                        </>
                                            : <Link to="/login">
                                                <button className="btn text-white bg-[#23aade] rounded-lg hover:bg-transparent hover:border-[#23aade] hover:text-[#23aade]">Login</button>
                                            </Link>
                                    }
                                </>
                        }

                    </div>
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