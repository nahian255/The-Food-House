import { Outlet } from "react-router-dom";
import SideBar from "../pages/shared/sideBar/SideBar";

const UserDashboard = () => {
    return (
        <div>
            <SideBar></SideBar>
            <div className="ml-64">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserDashboard;