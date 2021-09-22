import AdminPanel from './pages/AdminPanel'
import Basket from './pages/Basket'
import Device from './pages/DevicePage'
import Auth from './pages/Auth'
import Shop from './pages/Shop'
import { ADMIN_ROUTE, SIGNUP_ROUTE, SHOP_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, DEVICE_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
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
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: SIGNUP_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: Device
    }
]