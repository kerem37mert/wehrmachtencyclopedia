import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import NotFound from "./pages/NotFound";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="sozluk" element={ <Dictionary /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;