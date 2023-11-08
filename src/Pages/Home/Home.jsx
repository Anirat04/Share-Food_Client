import { Helmet } from "react-helmet";
import Banner from "./Home_Components/Banner/Banner";
import Featured_Foods from "./Home_Components/Featured_Foods/Featured_Foods";
import Gallery from "./Home_Components/Gallery/Gallery";
import Contact from "./Home_Components/Contact/Contact";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ShareFood
                </title>
            </Helmet>
            <Banner></Banner>
            <Featured_Foods></Featured_Foods>
            <Gallery></Gallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;