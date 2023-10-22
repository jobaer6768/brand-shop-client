import PropTypes from 'prop-types';


const Product = ({ product }) => {

    const { _id, name, brand_name, image, price, rating, type } = product;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-72">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className='flex justify-between px-8 md:px-20'>
                <p className='text-xl font-semibold'>Brand: <span className='opacity-70'>{brand_name}</span></p>
                <p className='text-xl font-semibold'>Type: <span className='opacity-70'>{type}</span></p>
            </div>
            <div className="card-body items-center text-center space-y-4">
                <h2 className="card-title">{name}</h2>
                <p>Rating: {rating}</p>
                <p className='text-xl font-semibold'>Price: <span className='opacity-80'>${price}</span></p>
                <div className="card-actions gap-10">
                    <button className="btn bg-red-400 font-medium text-white">Details</button>
                    <button className="btn bg-red-400 font-medium text-white">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Product;

Product.propTypes = {
    product: PropTypes.object
}