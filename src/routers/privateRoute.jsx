import { Navigate, Outlet } from "react-router-dom";
import { hasPermission, getDefaultRouteForRole } from "../utils/api/permissions";

export default function PrivateRoute({ allowedRoles }) {
    const userSession = JSON.parse(sessionStorage.getItem("userSession"));

    if (!userSession) {
        return <Navigate to="/" replace />;
    }

    const hasAccess = hasPermission(userSession.papel, allowedRoles);
    

    return hasAccess ? <Outlet /> : <Navigate to={getDefaultRouteForRole(userSession.papel)} replace />;
}
