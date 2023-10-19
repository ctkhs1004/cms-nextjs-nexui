import getCurrentUser from "@/utils/getCurrentUser";
import HeaderSignOut from "@/components/Header/HeaderSignOut";
import SidebarNav from "./SidebarNav";

const  Sidebar = () => {
    return (
        <div className="h-screen bg-gray-800 w-60 fixed">
                 <SidebarNav/>
        </div>
    )
}

export default Sidebar;