import { Outlet } from "react-router-dom"
import SideBar from "../features/dashboard/pet_owner/components/SideBar"

function DashboardLayout() {
    return (
        <div>
            <SideBar />
            <Outlet />
        </div>
    )
}

export default DashboardLayout
