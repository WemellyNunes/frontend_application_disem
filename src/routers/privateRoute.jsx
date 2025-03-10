import { Navigate, Outlet } from "react-router-dom";

export const getDefaultRouteForRole = (userRole) => {
    const roleRoutes = {
        0: "/dashboard",
        1: "/dashboard",
        2: "/filas", 
        3: "/401",
    };

    return roleRoutes[userRole] || "/dashboard"; 
};

export default function PrivateRoute({ allowedRoles }) {
    const userSession = JSON.parse(sessionStorage.getItem("userSession"));

    if (!userSession) {
        return <Navigate to="/" replace />;
    }

    const hasAccess = allowedRoles.includes(userSession.papel);

    return hasAccess ? <Outlet /> : <Navigate to={getDefaultRouteForRole(userSession.papel)} replace />;
}
