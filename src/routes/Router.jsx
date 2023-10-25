import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import AddProduct from '../pages/AddProduct/AddProduct';
import Products from '../components/Products/Products';
import ProductDetails from '../components/Products/ProductDetails';
import ProductUpdate from '../components/Products/ProductUpdate';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

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
                element: <Cart></Cart>,
                loader: () => fetch('http://localhost:5000/carts')

            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:brand_name/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand_name}/${params.id}`)
            },
            {
                path: '/update/:brand_name/:id',
                element: <ProductUpdate></ProductUpdate>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand_name}/${params.id}`)
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