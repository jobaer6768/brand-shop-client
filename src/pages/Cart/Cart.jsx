import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";


const Cart = () => {

    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts);


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