import PagesBanner from "../shared/PagesBanner";
import Banner from "./other/Banner";
import OrderOfline from "./other/OrderOfline";
import img from "../../assets/home/banner.jpg"
import ItemDiv from "./other/ItemDiv";
import MenuList from "./other/MenuList";
import CallUs from "./other/CallUs";
import ChefRecomCard from "./other/ChefRecomCard";

const Home = () => {
    return (
        <div>
            <Banner />
            <OrderOfline title1={'from 11:00am to 10:00pm'} title2={'ORDER ONLINE'} />
            <ItemDiv />
            <PagesBanner image={img} title={'THE FOOD HOUSE'} />
            <OrderOfline title1={'Check it out'} title2={'ORDER FROM OUR MENU'} />
            <MenuList />
            <CallUs />
            <OrderOfline title1={'Should try'} title2={'CHEF RECOMENDED'} />
            <ChefRecomCard />
        </div>
    );
};

export default Home;