import AdminLoginBox from "../../components/AdminLoginBox";
import { useContext } from "react";
import { AdminAuthContext } from "../../context/AdminAuthContext.jsx";
import { Navigate } from "react-router";

const AdminLogin = () => {

    const { isAuthenticated } = useContext(AdminAuthContext);

    if(isAuthenticated)
        return <Navigate to="/admin" replace />;

    return(
        <>
            <AdminLoginBox />
        </>
    )
}

export default AdminLogin;