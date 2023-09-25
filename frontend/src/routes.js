/* Два массива роутов, которые указывают марсшруты для авторизованных и неавторизованных 
пользователей
*/
import Product from "./components/Product"
import Admin from "./pages/Admin"
import Authorization from "./pages/AutorizationPage"
import Basket from "./pages/Basket"
import Shop from "./pages/MainPage"
import { ADMIN_ROUTE, BASKET_ROUTE, PRODUCT_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE, 
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    }, 
    {
        path: REGISTRATION_ROUTE, 
        Component: Authorization
    }, 
    {
        path: LOGIN_ROUTE, 
        Component: Authorization
    }, 
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: Product
    }
]