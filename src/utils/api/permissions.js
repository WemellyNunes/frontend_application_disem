export const UserRoles = {
    ADMIN: 0,
    COLABORADOR_I: 1,
    COLABORADOR_II: 2,
    USUARIO: 3,
};

/**
 * @param {number} userRole 
 * @param {array} allowedRoles 
 * @returns {boolean}
 */
export const hasPermission = (userRole, allowedRoles) => {
    return allowedRoles.includes(userRole);
};

/**
 * @param {number} userRole 
 * @returns {string} 
 */

export const getDefaultRouteForRole = (userRole) => {
    if (userRole == UserRoles.COLABORADOR_II) {
        return "/filas";
    } else if (userRole == UserRoles.USUARIO) {
        return "/401"
    }

    return "/dashboard";
};
