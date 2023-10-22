import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";


const Products = () => {

    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts);

    return (
        <div className="container mx-auto my-20">

            <div className="text-6xl my-10">Slider</div>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;