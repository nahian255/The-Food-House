import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Shop from "../pages/shop/Shop";
import ContactUs from "../pages/contactUs/ContactUs";
import Pizza from "../pages/shop/shopChildren/Pizza";
import Drinks from "../pages/shop/shopChildren/Drinks";
import Dessert from "../pages/shop/shopChildren/Dessert";
import Salad from "../pages/shop/shopChildren/Salad";
import Shoup from "../pages/shop/shopChildren/Shoup";
import Longin from "../pages/login/Longin";
import SingUp from "../pages/singUp.jsx/SingUp";
import UserHome from "../pages/dashboard/userDashboard/userHome/userHome/UserHome";
import Payment from "../pages/dashboard/userDashboard/reservation/payment/Payment";
import PaymentHistory from "../pages/dashboard/userDashboard/paymentHistory/paymentHistory/PaymentHistory";
import MyCart from "../pages/dashboard/userDashboard/myCart/myCart/MyCart";
import UserDashboard from "../layout/UserDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'shop',
                element: <Shop></Shop>,
                children: [
                    {
                        path: '/shop/pizza',
                        element: <Pizza></Pizza>
                    },
                    {
                        path: '/shop/drinks',
                        element: <Drinks />
                    },
                    {
                        path: '/shop/dessert',
                        element: <Dessert />
                    },
                    {
                        path: '/shop/salad',
                        element: <Salad />
                    },
                    {
                        path: '/shop/soup',
                        element: <Shoup />
                    },

                ]

            },
            {
                path: 'contactus',
                element: <ContactUs />
            },

        ]
    },
    {
        path: "login",
        element: <Longin></Longin>
    },
    {
        path: "singup",
        element: <SingUp />
    },
    {
        path: '/dashboard',
        element: <UserDashboard></UserDashboard>,
        children: [
            {
                path: '/dashboard',
                element: <UserHome></UserHome>
            },
            {
                path: '/dashboard/reservation',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/payment-history',
                element: <PaymentHistory />
            },
            {
                path: '/dashboard/my-cart',
                element: <MyCart />
            }
        ]
    }

]);




export default router;