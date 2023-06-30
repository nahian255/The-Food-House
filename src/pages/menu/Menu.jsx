import PagesBanner from "../shared/PagesBanner";
import image from "../../assets/menu/banner3.jpg"

const Menu = () => {
    return (
        <div>
            <PagesBanner image={image} title={'Menu Section'} subTitle={'we can see the all menu here and also pick your favourite'} />
            <h1>menu</h1>
        </div>
    );
};

export default Menu;