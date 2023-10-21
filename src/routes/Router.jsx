import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import AddProduct from '../pages/AddProduct/AddProduct';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            }
        ]
    }
])

export default router;