import { Link } from "react-router-dom";

const SideBar = () => {

    return (
        <div className="flex">
            <div className={`fixed inset-y-0 left-0 w-64 bg-gray-800 transform
             transition duration-300`} >
                <div >
                    <h1 className="text-white p-10"> name of the dashboard owner</h1>
                    <h1 className="text-white p-10"> img of the same person</h1>

                </div>

                {/* user DhashBoard route */}
                <ul className="  ">
                    <li className="text-white hover:text-gray-400 px-6 py-2"> <Link to='/dashboard' >USER HOME</Link></li>
                    <li className="text-white  hover:text-gray-400 cursor-pointer px-6 py-2"> <Link to='/dashboard/reservation' >RESERVATION</Link></li>
                    <li className="text-white hover:text-gray-400 cursor-pointer px-6 py-2"> <Link to='/dashboard/payment-history' >PAYMENT HISTORY</Link></li>
                    <li className="text-white hover:text-gray-400 cursor-pointer mb-8 px-6 py-2"> <Link to='/dashboard/my-cart' >MY CART</Link></li>
                </ul>

                <div className="bg-red-400"> <hr /></div>

                {/* main route */}
                <ul className="  ">
                    <li className="text-white hover:text-gray-400 mt-8 px-6 py-2"> <Link to='/' > HOME</Link></li>
                    <li className="text-white  hover:text-gray-400 cursor-pointer px-6 py-2"> <Link to='/menu' > MENU </Link></li>
                    <li className="text-white hover:text-gray-400 cursor-pointer px-6 py-2"> <Link to='/shop/salad' > SHOP </Link></li>
                    <li className="text-white hover:text-gray-400 cursor-pointer mb-8 px-6 py-2"> <Link to='/contactus' > CONTRACT</Link></li>
                </ul>

            </div>

        </div>
    );
};

export default SideBar;
