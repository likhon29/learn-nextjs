import Sidebar from "@/components/Shared/Sidebar/Sidebar";

export const metadata = {
    title: "Dashboard | Learn NextJs",
    description: 'asdjkasdlkjasd'
}
const DashboardLayout = ({children}) => {
    return (
        <div className="flex container  mx-auto">
            <Sidebar></Sidebar>
            {children}
        </div>
    );
};

export default DashboardLayout;