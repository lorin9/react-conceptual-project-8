import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <NavBar></NavBar>
            <div className="py-10">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;