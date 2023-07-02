import PagesBanner from "../shared/PagesBanner";
import Banner from "./other/Banner";
import OrderOfline from "./other/OrderOfline";
import img from "../../assets/home/banner.jpg"

const Home = () => {
    return (
        <div>
            <Banner />
            <OrderOfline title1={'from 11:00am to 10:00pm'} title2={'ORDER ONLINE'} />
            <PagesBanner image={img} title={'THE FOOD HOUSE'} />
            <OrderOfline title1={'Check it out'} title2={'ORDER FROM OUR MENU'} />
        </div>
    );
};

export default Home;