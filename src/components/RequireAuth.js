import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useCookies } from "react-cookie";

const RequireAuth = () => {
    // const [cookies, setCookie] = useCookies();
    const [cookies] = useCookies();
    // console.log('cookies usertype',cookies.usertype);
    const location = useLocation();
    return (
        cookies.token ===""
        ? <Navigate to="./result" state={{ from: location }} replace />
        : cookies.token && cookies.token !==""
        ? <Outlet />
        : <Navigate to="./" state={{ from: location }} replace />
    );
}

export default RequireAuth