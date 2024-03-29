import { createBrowserRouter } from "react-router-dom";
import { Conclusion }          from "./pages/conclusion";
import { Layout }              from "./components/layout";
import { Home   }              from "./pages/home";
import { Cart   }              from "./pages/cart";

export const router = createBrowserRouter(

    [
        {
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                }, 
                {
                    path:'/cart',
                    element: <Cart/>
                },
                {
                    path: '/conclusion-shopping',
                    element: <Conclusion/>
                }
            ]
        }
    ]
)