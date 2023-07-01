import PagesBanner from "../shared/PagesBanner";
import img from "../../assets/shop/banner2.jpg"
import { Link, Outlet } from "react-router-dom";


const Shop = () => {


    return (
        <div className="bg-blue-50">
            <PagesBanner image={img} title={'Shop Now'} />
            <div className="w-full  container mx-4 md:mx-auto   md:px-80">
                <nav>
                    <ul className="text-2xl  flex gap-14 mt-8">
                        <Link to='/shop/salad'>Salad</Link>
                        <Link to='/shop/pizza' className="">Pizza</Link>
                        <Link to='/shop/soup'>soup</Link>
                        <Link to='/shop/dessert'>dessert</Link>
                        <Link to='/shop/drinks'>drinks</Link>
                    </ul>
                </nav>
            </div>
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default Shop;