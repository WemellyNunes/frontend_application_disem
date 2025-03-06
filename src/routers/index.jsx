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
import { UserRoles } from "../utils/api/permissions";
import PrivateRoute from "./privateRoute";

function AppRoutes() {
    const location = useLocation(); 
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  
    const isLoginPage = location.pathname === "/";
  
    return (
      <div className="flex">
        {!isLoginPage && (
          <Sidebar
            isCollapsed={isCollapsed}
            toggleSidebar={() => setIsCollapsed(!isCollapsed)}
          />
        )}
  
        {!isLoginPage && (
          <MobileMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
        )}
  
          <div
          className={`transition-all duration-300 ease-in w-full flex-grow px-1 ${
            !isLoginPage
              ? isCollapsed
                ? "ml-0 md:ml-14" 
                : "ml-0 md:ml-60" 
              : "" 
          }`}
        >
          <Routes>
            <Route path="/" element={<Login />} />


            <Route element={<PrivateRoute allowedRoles={[UserRoles.ADMIN, UserRoles.COLABORADOR_I]} />}>
              <Route path="/formulario" element={<Form />} />
              <Route path="/equipe" element={<TeamPage />} />
              <Route path="/infraestrutura" element={<InfraPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            <Route element={<PrivateRoute allowedRoles={[UserRoles.ADMIN, UserRoles.COLABORADOR_I, UserRoles.COLABORADOR_II]} />}>
              <Route path="/filas" element={<Listing />} />
              <Route path="/atendimento/:id" element={<Programing />}/>
            </Route>

            <Route element={<PrivateRoute allowedRoles={[UserRoles.ADMIN]} />}>
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
  