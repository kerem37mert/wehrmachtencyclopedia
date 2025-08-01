import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AdminAuthContext = createContext();

const AdminAuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");

        if(user) {
            try {
                const decoded = jwtDecode(user);
                const now = Date.now() / 1000;

                if(decoded.exp > now)
                    setIsAuthenticated(true)
                else
                    localStorage.removeItem("user");

            } catch(err) {
                console.log(err)
                localStorage.removeItem("user");
            }
        }
    }, []);

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