import AdminPage from "./pages/AdminPanel"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
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