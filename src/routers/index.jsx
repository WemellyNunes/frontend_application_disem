import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Form from "../pages/form";
import Programing from "../pages/programing";
import Listing from "../pages/listing";
import Sidebar from "../components/sideBar"; // Importe o componente Sidebar

// Componente de Rotas
function AppRoutes() {
    const location = useLocation(); // Pega a localização atual (rota)

    const isLoginPage = location.pathname === '/'; 
    // Verifica se está na página de login
    return (
        <div className="flex "> {/* Flex container para ocupar espaço sem overflow horizontal */}
            {/* Exibe o Sidebar apenas se não estiver na página de login */}
            {!isLoginPage && <Sidebar />}
            
            {/* Conteúdo principal, que varia conforme a rota e ocupa o restante do espaço */}
            <div className={`flex-grow p-4 ${!isLoginPage ? 'ml-16 md:ml-64' : ''}`}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="form" element={<Form />} />
                    <Route path="programing/:id" element={<Programing />} />
                    <Route path="listing" element={<Listing />} />
                </Routes>
            </div>
        </div>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}
