import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    )
};