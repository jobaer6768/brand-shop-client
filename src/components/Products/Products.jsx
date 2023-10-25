import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Product from "./Product";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Products = () => {

    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts);

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: '680px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '80vh'
    }

    if (products.length === 0) {
        return <div className="container mx-auto flex flex-col justify-center items-center h-screen">
            <p className="text-2xl md:text-7xl font-bold">Sorry! No Products Available!</p>
            <div className="mt-2">
                <Link to="/"><button className="btn text-white btn-error">Go Home</button></Link>
            </div>
        </div>
    }

    return (
        <div className="container mx-auto my-20">

            <div className="text-center text-4xl font-bold mb-6">Our Featured Products</div>

            <div className="">
                <Slide>
                    {products.map((product, index) => (
                        <div key={index}>
                            <div className="relative" style={{ ...divStyle, 'backgroundImage': `url(${product.image})` }}>
                                <span className="absolute bottom-0 text-xs opacity-80">{product.name}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
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