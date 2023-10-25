

const AddProduct = () => {

    const handleAddProduct = async (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;

        const product = { name, brand_name, image, type, price, rating, details };
        console.log(product);

        try {
            const res = await fetch('http://localhost:5000/products', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            })
            const data = await res.json()
            console.log(data);

            if(data.insertedId){
                alert('added successfully');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="my-20 container mx-auto">
            <div className="font-medium bg-base-200 p-20 rounded-lg my-20">
                <h2 className="text-3xl text-orange-400 font-bold text-center mb-4">Add Product</h2>
                <form onSubmit={handleAddProduct} className="space-y-8">
                    {/* form 1st row */}
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Enter Product Name " className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Brand Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="brand_name" placeholder="Enter Brand Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* form 2nd row */}
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Image</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="image" placeholder="photo url" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Type</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="type" placeholder="phone, laptop, headphone....." className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* form 3rd row */}
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="price" placeholder="Enter Coffee Price" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="rating" placeholder="Enter Rating Name " className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* form 4th row */}
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Write short description" className="input input-bordered w-full py-10" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add" className="btn btn-block bg-orange-400 text-white" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;