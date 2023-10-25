import PropTypes from 'prop-types';


const CartProduct = ({ product, products,  setProducts }) => {

    const { _id, name, brand_name, image, price } = product;

    const handleDelete = id => {
        fetch(`http://localhost:5000/carts/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.deletedCount){
                alert('deletedSuccessfully');

                const remainingProducts = products.filter(pd => pd._id !== id);
                setProducts(remainingProducts)
            }
        })
    }

    return (
        <div className="flex md:w-3/4 justify-between bg-base-100 p-10 rounded-lg shadow-xl">
            <figure className='md:flex-1 flex justify-center items-center'>
                <img className='w-full' src={image} alt="Movie" />
            </figure>
            <div className="card-body space-y-1">
                <h2 className="card-title">{name}</h2>
                <p className='font-semibold'>Brand: <span className='opacity-80'>{brand_name}</span></p>
                <p className='font-semibold'>Price: <span className='opacity-80'> {price}</span></p>
                <div className="card-actions">
                    <button onClick={()=> handleDelete(_id)} className="btn btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;

CartProduct.propTypes = {
    product: PropTypes.object,
    products: PropTypes.array,
    setProducts: PropTypes.func
}