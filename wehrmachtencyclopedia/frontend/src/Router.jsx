import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutsUs";
import NotFound from "./pages/NotFound";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="aboutus" element={ <AboutUs /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;