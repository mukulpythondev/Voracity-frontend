import Dashboard from "@/components/ui/Dashboard"
import Sidebar from "@/components/ui/Sidebar"
import UpdateBoard from "@/components/ui/UpdateBoard"

const DashboardLayout = () => {
  return (
    <div className="h-screen w-screen flex bg-[#F8F9FB]" >
        <Sidebar/>
        <Dashboard/>
        <UpdateBoard/>  
    </div>
  )
}

export default DashboardLayout