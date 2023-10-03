import PagesBanner from "../shared/PagesBanner";
import img from "../../assets/shop/banner2.jpg"
import { NavLink, Outlet } from "react-router-dom";
import './shop.css'


const Shop = () => {


    return (
        <div className="bg-blue-50">
            <PagesBanner image={img} title={'Shop Now'} />
            <div className="w-full  container mx-4 md:mx-auto   md:px-80">
                <nav>
                    <ul id="navbar" className="text-2xl  flex gap-14 mt-8">
                        <NavLink to='/shop/salad'>Salad</NavLink>
                        <NavLink to='/shop/pizza' className="">Pizza</NavLink>
                        <NavLink to='/shop/soup'>soup</NavLink>
                        <NavLink to='/shop/dessert'>dessert</NavLink>
                        <NavLink to='/shop/drinks'>drinks</NavLink>
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