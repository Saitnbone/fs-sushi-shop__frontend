import React, { useContext } from "react";
import {Routes, Route} from "react-router-dom"
// import { authRoutes, publicRoutes} from "../routes";
import MainPage from "../pages/MainPage";
import { Context } from "../index";
import AuthorizationPage from "../pages/AuthorizationPage";
import Product from "./Product";
import Admin from "../pages/Admin";
import BasketPage from "../pages/BasketPage";

const AppRouter = () =>{
    const { user } = useContext(Context);
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            {user.isAuth ? (
        // Если пользователь авторизован, отображаем маршруты для авторизованных пользователей
        <>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/basket" element={<BasketPage />}/>
        </>
      ) : (
        // Если пользователь не авторизован, отображаем маршруты для неавторизованных пользователей
        <>
        <Route path="/registration" element={<AuthorizationPage/>} />
        <Route path="login" element={<AuthorizationPage/>}/>
        <Route path="/product" element={<Product />}/>
        </>
      )}
      <Route path="*" element={<MainPage />} />
    </Routes>
    )
}

export default AppRouter;
