import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Form from "../pages/form";
import Programing from "../pages/programing";
import Listing from "../pages/listing";
import Sidebar from "../components/sideBar";
import MobileMenu from "../components/sideBar/mobile";
import UserPage from "../pages/users";
import TeamPage from "../pages/team";
import InfraPage from "../pages/infra";
import ServiceError from "../pages/statusHTTP/503";
import Unauthorized from "../pages/statusHTTP/401";
import { useState } from 'react';
import PrivateRoute from "./privateRoute";

function AppRoutes() {
  const location = useLocation(); 
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isLoginPage = location.pathname === "/";
  const is401Page = location.pathname === "/401";

  const userSession = JSON.parse(sessionStorage.getItem("userSession"));
  const showSidebar = !isLoginPage && !is401Page && (userSession?.papel === 0 || userSession?.papel === 1);

  const contentMargin = showSidebar ? (isCollapsed ? "md:ml-14" : "md:ml-60") : "ml-0";

  return (
    <div className="flex">
      {showSidebar && (
        <Sidebar
          isCollapsed={isCollapsed}
          toggleSidebar={() => setIsCollapsed(!isCollapsed)}
        />
      )}

      {showSidebar && (
        <MobileMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
      )}

      <div className={`transition-all duration-300 ease-in w-full flex-grow px-1 ${contentMargin}`}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<PrivateRoute allowedRoles={[0, 1]} />}>
            <Route path="/formulario" element={<Form />} />
            <Route path="/formulario/:id" element={<Form />} />
            <Route path="/equipe" element={<TeamPage />} />
            <Route path="/infraestrutura" element={<InfraPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route element={<PrivateRoute allowedRoles={[0, 1, 2]} />}>
            <Route path="/filas" element={<Listing />} />
            <Route path="/atendimento/:id" element={<Programing />}/>
          </Route>

          <Route element={<PrivateRoute allowedRoles={[0]} />}>
            <Route path="/usuarios" element={<UserPage />} />
          </Route>

          <Route path="/503" element={<ServiceError />} />
          <Route path="/401" element={<Unauthorized />} />

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default function AppWrapper() {
    return (
      <Router basename="/">
        <AppRoutes />
      </Router>
    );
}
  