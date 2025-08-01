import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { AdminAuthContext } from "../../context/AdminAuthContext.jsx";

const AdminLayout = () => {

    const { isAuthenticated } = useContext(AdminAuthContext);

    if(!isAuthenticated)
        return <Navigate to="/giris" replace />

    return (
        <>
            <Outlet />
        </>
    );
}

export default AdminLayout;