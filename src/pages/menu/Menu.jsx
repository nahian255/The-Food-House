import PagesBanner from "../shared/PagesBanner";
import image from "../../assets/menu/banner3.jpg"
import DessertMenu from "./DessertMenu";
import PizzaMenu from "./PizzaMenu";
import SalladMenu from "./SalladMenu";
import ShoupMenu from "./ShoupMenu";


const Menu = () => {


    return (
        <div>
            <PagesBanner image={image} title={'Menu Section'} subTitle={'we can see the all menu here and also pick your favourite'} />
            <SalladMenu />
            <PizzaMenu />
            <ShoupMenu />
            <DessertMenu />



        </div>
    );
};

export default Menu;