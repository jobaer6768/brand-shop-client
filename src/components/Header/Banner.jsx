

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(/brand-shop-banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Tech's Biggest Names, All in One Store</h1>
                        <p className="">Experience a world of possibilities, explore the finest in tech innovation, and discover your favorite products from the brands you trust. Elevate your tech game with us start shopping today!</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;