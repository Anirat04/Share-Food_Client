import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar/Navbar";

const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Layout;