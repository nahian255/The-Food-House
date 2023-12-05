import { Link } from 'react-router-dom';
import useMenu from '../../hooks/useMenu';
import PagesBanner from '../shared/PagesBanner';
import imgSoup from "../../assets/menu/soup-bg.jpg"

const ShoupMenu = () => {
    const [menu] = useMenu()
    const soups = menu.filter(item => item.category === 'soup')
    const soupsMenu = soups.slice(0, 6);

    return (
        <div>
            <PagesBanner image={imgSoup} title={'Shoup'}></PagesBanner>
            <div className="px-10 md:px-24 py-10">
                <div className="overflow-x-auto">
                    <table className="bg-white border border-gray-300 w-full">
                        <tbody>
                            {soupsMenu?.map((item, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? 'bg-gray-100' : ''}
                                >
                                    <td className="md:py-3 md:px-4">
                                        <img
                                            className="lg:h-28 lg:w-28 object-cover rounded"
                                            src={item.image}
                                            alt={item.name}
                                        />
                                    </td>
                                    <td className="font-bold md:text-xl lg:text-2xl py-3 px-4">{item.name}</td>
                                    <td className="py-3 lg:text-xl px-4 hidden md:block">
                                        {item.recipe}
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className="text-orange-600">${item.price}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="py-8 px-4 text-center">
                        <Link to="/shop/soup">
                            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                                ORDER YOUR FAVOURATE SHOUP
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoupMenu;