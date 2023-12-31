import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Brand = ({ brand }) => {

    const { brand_name, image } = brand;

    return (
        <Link to={`/products/${brand_name}`}>
            <div className="card w-96 h-96 bg-base-100 shadow-md cursor-pointer hover:shadow-2xl">
                <figure className="px-10 pt-10 h-96">
                    <img src={image} alt={brand_name} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-bold">{brand_name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Brand;

Brand.propTypes = {
    brand: PropTypes.object,
}