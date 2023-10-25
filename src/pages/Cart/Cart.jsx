import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";
import { AuthContext } from "../../hooks/AuthProvider";


const Cart = () => {

    const { user } = useContext(AuthContext);
    const email = user?.email;

    const loadedProducts = useLoaderData();
    const tempProducts = loadedProducts.filter(pd => pd.email===email);

    const [products, setProducts] = useState(tempProducts);


    return (
        <div className="container my-10">

            <div className="flex flex-col gap-6 md:justify-center md:items-center">
                {
                    products.map(product => <CartProduct
                        key={product._id}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                    ></CartProduct>)
                }
            </div>

        </div>
    );
};

export default Cart;