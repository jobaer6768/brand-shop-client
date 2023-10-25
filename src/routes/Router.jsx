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
import PrivateRoute from './PrivateRoute';
import PrivateRouteServices from './PrivateRouteServices';
import ErrorPage from '../pages/error-page/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cart',
                element: <PrivateRouteServices><Cart></Cart></PrivateRouteServices>,
                loader: () => fetch('http://localhost:5000/carts')

            },
            {
                path: '/addProduct',
                element: <PrivateRouteServices><AddProduct></AddProduct></PrivateRouteServices>
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
                element: <PrivateRouteServices><ProductDetails></ProductDetails></PrivateRouteServices>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand_name}/${params.id}`)
            },
            {
                path: '/update/:brand_name/:id',
                element: <PrivateRoute><ProductUpdate></ProductUpdate></PrivateRoute>,
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