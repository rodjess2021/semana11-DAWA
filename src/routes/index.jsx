import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BooksView, HomeView } from "../page";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>} />
                <Route path="/books" element={<BooksView/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;