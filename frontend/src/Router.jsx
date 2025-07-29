import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import Generals from "./pages/Generals";
import GeneralProfile from "./pages/GeneralProfile";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/AdminLayout/index.js";
import AdminLogin from "./pages/AdminLogin/index.js";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="sozluk" element={ <Dictionary /> } />
                <Route path="generaller" element={ <Generals /> } />
                <Route path="general-profil/:id" element={ <GeneralProfile /> } />
                <Route path="admin" element={ <AdminLayout /> } >
                    <Route path="login" element={ <AdminLogin /> } />
                    <Route path="home" element={ <Home /> } />
                </Route>
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;