import About from "../../components/About/About";
import Brands from "../../components/Brands/Brands";
import Contact from "../../components/Contact/Contact";
import Banner from "../../components/Header/Banner";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;