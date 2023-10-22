import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import AddProduct from '../pages/AddProduct/AddProduct';
import Products from '../components/Products/Products';

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
            },
            {
                path: '/products/:brand_name',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand_name}`)
            }
        ]
    }
])

export default router;