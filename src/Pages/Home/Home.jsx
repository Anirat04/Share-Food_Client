import { Helmet } from "react-helmet";
import Banner from "./Home_Components/Banner/Banner";
import Featured_Foods from "./Home_Components/Featured_Foods/Featured_Foods";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ShareFood
                </title>
            </Helmet>
            <Banner></Banner>
            <Featured_Foods></Featured_Foods>
        </div>
    );
};

export default Home;