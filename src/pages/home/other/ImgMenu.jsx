import OrderOfline from "./OrderOfline";
import img from '../../../assets/home/featured.jpg'
import { Link } from "react-router-dom";


const ImgMenu = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${img})`,
                position: '', // Add this line to make positioning easier
            }}
            className="bg-local py-4 md:py-10 "
        >
            <div className="px-10 md:px-24">
                <OrderOfline title1={'check it out'} title2={'FROM OUR MENU'} />
                <div className="lg:flex gap-4 pb-4 md:pb-8 relative">
                    <img
                        className="w-[530px] md:h-[250px] lg:h-[310px] pb-4 md:pl-16"
                        src={img}
                        alt=""
                    />
                    <div className="text-white absolute w-full md:h-[250px] lg:h-[310px] bg-black opacity-40">

                    </div>
                    <div className="text-white relative  p-8">
                        <h1>Date : 10-11-2023</h1>
                        <h1 className="text-2xl font-semibold py-2"> Where Can I Get Some?</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ad
                            culpa sunt fugit animi accusantium soluta excepturi velit expedita
                            nulla quasi placeat hic, aliquid nam ex, eaque adipisci laborum
                            totam!
                        </p>
                        <Link to="/shop">
                            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-6">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ImgMenu;