import { Outlet } from "react-router-dom"
import Header from "../features/dashboard/veterinarian/components/Header"

function VaterinarianDashBoardLayout() {
    return (
        <div className="flex   gap-8 ">
            <Header />
            <Outlet />
        </div>
    )
}

export default VaterinarianDashBoardLayout
