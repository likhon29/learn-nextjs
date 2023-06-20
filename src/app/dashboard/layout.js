export const metadata = {
    title: "Dashboard | Learn NextJs",
    description: 'asdjkasdlkjasd'
}
const DashboardLayout = ({children}) => {
    return (
        <div>
            <aside>
                Sidebar
            </aside>
            {children}
        </div>
    );
};

export default DashboardLayout;