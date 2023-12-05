import PagesBanner from "../shared/PagesBanner";
import Banner from "./other/Banner";
import img from "../../assets/home/banner.jpg"
import ItemDiv from "./other/ItemDiv";
import MenuList from "./other/MenuList";
import CallUs from "./other/CallUs";
import ChefRecomCard from "./other/ChefRecomCard";
import Review from "./other/Review";
import ImgMenu from "./other/ImgMenu";

const Home = () => {
    return (
        <div>
            <Banner />
            <ItemDiv />
            <PagesBanner image={img} title={'THE FOOD HOUSE'} />
            <MenuList />
            <CallUs />
            <ChefRecomCard />
            <ImgMenu />
            <Review />
        </div>
    );
};

export default Home;