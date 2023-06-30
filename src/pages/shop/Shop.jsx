import useMenu from "../../hooks/useMenu";
import PagesBanner from "../shared/PagesBanner";
import img from "../../assets/shop/banner2.jpg"
import { Link, Outlet } from "react-router-dom";


const Shop = () => {

    const [menu] = useMenu()

    return (
        <div>
            <PagesBanner image={img} title={'Shop Now'} />
            <div className="container mx-auto px-80">
                <nav>
                    <ul className="text-2xl  flex gap-14 mt-8">
                        <Link to='/shop/pizza' className="">Pizza</Link>
                        <Link to='/shop/drinks'>drinks</Link>
                        <Link to='/shop/salad'>Salad</Link>
                        <Link to='/shop/dessert'>dessert</Link>
                        <Link to='/shop/soup'>soup</Link>
                    </ul>
                </nav>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Shop;