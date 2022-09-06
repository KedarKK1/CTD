import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useCookies } from "react-cookie";

const RequireAuth = () => {
    const [cookies, setCookie] = useCookies();
    // console.log('cookies usertype',cookies.usertype);
    const location = useLocation();
    return (
        cookies.token
        ? <Outlet />
        : <Navigate to="./" state={{ from: location }} replace />
    );
}

export default RequireAuth