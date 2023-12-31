import { useEffect, useState } from "react";
import Brand from "./Brand";


const Brands = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://brand-shop-server-p3jbgexzq-jobaer6767s-projects.vercel.app/brands')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setBrands(data);
            })
    }, [])

    return (
        <div className="container mx-auto my-20">
            <h2 className="text-5xl text-orange-400 font-bold mb-10 text-center">Places to Visit</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    brands.map(brand => <Brand
                        key={brand._id}
                        brand={brand}
                    ></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;