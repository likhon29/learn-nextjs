import Navbar from "@/components/Shared/Navbar/Navbar";

const WithLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            
        </div>
    );
};

export default WithLayout;