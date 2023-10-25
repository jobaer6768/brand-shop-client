import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const loadedProduct = useLoaderData();
    const { _id, name, brand_name, image, price, rating, type, details } = loadedProduct;

    const handleAddCart = (id, name, brand_name, image, price) => {
        const addedProduct = { id, name, brand_name, image, price };

        fetch('http://localhost:5000/carts', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addedProduct),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.insertedId){
                alert("added successfully");
            }
        })
    }

    return (
        <div className="container mx-auto my-12">
            <div className="grid grid-cols-2 md:grid-cols-3 mb-6">
                <div className="md:col-span-1">
                    <img className="w-full" src={image} alt="" />
                </div>
                <div className="md:col-span-2 bg-orange-100 rounded-xl px-8 pt-8 space-y-2 relative">
                    <h3 className="text-2xl font-bold mb-8">{name}</h3>
                    <h5 className="text-xl font-semibold">Brand: {brand_name}</h5>
                    <p className="text-xl font-semibold">Price: <span className="opacity-90">${price}</span></p>
                    <p className="text-xl font-semibold">Type: <span className="opacity-90">{type}</span></p>
                    <p className="text-xl font-semibold">Rating: <span className="opacity-90">{rating}</span></p>
                    <div className="absolute bottom-8 right-6">
                        <button onClick={() => handleAddCart(_id, name, brand_name, image, price)} className="btn bg-red-400 font-semibold text-white">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-xl opacity-80">{details}</p>
            </div>
        </div>
    );
};

export default ProductDetails;