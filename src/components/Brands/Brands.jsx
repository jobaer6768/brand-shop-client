import { useEffect, useState } from "react";
import Brand from "./Brand";


const Brands = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setBrands(data);
            })
    }, [])

    return (
        <div className="container mx-auto my-20">
            <h2 className="text-4xl font-bold mb-10 text-center">Places to Visit</h2>
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