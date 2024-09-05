import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Form from "../pages/form";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="form" element={<Form />} />
            </Routes>
        </Router>
    )
};