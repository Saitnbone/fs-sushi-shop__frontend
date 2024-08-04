/* Два массива роутов, которые указывают марсшруты для авторизованных и неавторизованных 
пользователей
*/
import Product from "./components/Product"
import Admin from "./pages/Admin"
import AuthorizationPage from "./pages/AuthorizationPage"
import BasketPage from "./pages/BasketPage"
import MainPage from "./pages/MainPage"

import { 
    ADMIN_ROUTE, 
    SHOP_ROUTE, 
    BASKET_ROUTE, 
    REGISTRATION_ROUTE, 
    LOGIN_ROUTE, 
    PRODUCT_ROUTE 
} from "./utils/consts"

export const authRoutes = [
    {
        path: "/admin",
        Component: Admin
    },
    {
        path: "/basket", 
        Component: BasketPage
    }
]

export const publicRoutes = [
    {
        path: "/",
        Component: MainPage
    }, 
    {
        path: "/registration", 
        Component: AuthorizationPage
    }, 
    {
        path: "/login", 
        Component: AuthorizationPage
    }, 
    {
        path: "/product"+ "/:id",
        Component: Product
    }
]