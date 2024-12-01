import { jwtDecode } from "jwt-decode";
import { TOKEN_NAME } from "@/constants";

export interface JwtPayload {
    userEmail: string;
    userRoles: string[];
    userId: string;
}

export const getClientCookies = () => {
    const cookieStr = document.cookie;
    return Object.fromEntries(
        cookieStr.split("; ").map(cookie => {
            const [key, value] = cookie.split("=");
            return [key, decodeURIComponent(value)];
        })
    );
};

export const getUserRolesClient = () => {
    const cookies = getClientCookies();
    const token = cookies[TOKEN_NAME];
    if (!token) return [];
    try {
        const decodedToken = jwtDecode<JwtPayload>(token);
        return decodedToken.userRoles;
    } catch (error) {
        console.error("Token Invalido", error);
        return [];
    }
};

export const getUserIdClient = () => {
    const cookies = getClientCookies();
    const token = cookies[TOKEN_NAME];
    if (!token) return "";
    try {
        const decodedToken = jwtDecode<JwtPayload>(token);
        return decodedToken.userId;
    } catch (error) {
        console.error("Token Invalido", error);
        return "";
    }
};