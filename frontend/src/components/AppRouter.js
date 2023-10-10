import React, { useContext } from "react";
import {Routes, Route} from "react-router-dom"
// import { authRoutes, publicRoutes} from "../routes";
import MainPage from "../pages/MainPage";
import { Context } from "../index";
import AuthorizationPage from "../pages/AuthorizationPage/AuthorizationPage";
import Product from "./Product";
import AdminPage from "../pages/AdminPage/AdminPage";
import BasketPage from "../pages/BasketPage/BasketPage";
import ContactPage from "../pages/ContactPage/ContactPage";

const AppRouter = () =>{
    const { user } = useContext(Context);
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            {user.isAuth ? (
        // Если пользователь авторизован, отображаем маршруты для авторизованных пользователей
        <>
        
        
        </>
      ) : (
        // Если пользователь не авторизован, отображаем маршруты для неавторизованных пользователей
        <>
        <Route path="/contacts" element={<ContactPage />}/>
        <Route path="/admin" element={<AdminPage />}/>
        <Route path="/basket" element={<BasketPage />}/>
        <Route path="/registration" element={<AuthorizationPage/>} />
        <Route path="/login" element={<AuthorizationPage/>}/>
        <Route path="/product" element={<Product />}/>
        </>
      )}
      <Route path="*" element={<MainPage />} />
    </Routes>
    )
}

export default AppRouter;
