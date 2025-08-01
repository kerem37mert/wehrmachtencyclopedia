import { createContext, useState } from "react";

const AdminAuthContext = createContext();

const AdminAuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AdminAuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            { children }
        </AdminAuthContext.Provider>
    );

}

export {
    AdminAuthContext,
    AdminAuthProvider
}