import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
import DashboardCard from "../components/DashboardCard"
import MyPet from "../components/MyPet"
import DashboardLeaderBoard from "../components/DashboardLeaderBoard"

function OwnerDahsboard() {
    return (
        <div className="bg-[#e6f1f6] pb-8">
          <DashboardCard /> 
          <MyPet />
          <DashboardLeaderBoard />
        </div>
    )
}

export default OwnerDahsboard
