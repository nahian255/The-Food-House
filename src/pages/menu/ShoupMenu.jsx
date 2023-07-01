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
            <PagesBanner image={imgSoup} title={'Dessert'}></PagesBanner>
            <div className="container mx-auto py-8">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 ">
                        <tbody className=" ">
                            {soupsMenu.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                    <td className="py-3 px-4">
                                        <img className="h-16 w-16 object-cover rounded" src={item.image} alt={item.name} />
                                    </td>
                                    <div className="flex flex-col sm:flex-row">
                                        <td className=" font-bold py-3 px-4">{item.name}</td>
                                        <td className="py-3 px-4">{item.recipe}</td>
                                    </div>
                                    <td className="py-3 px-4"><span className="text-orange-600"> $ {item.price}</span> </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="py-3 px-4 text-center">
                        <Link to='/shop/dessert'><button className="bg-orange-300 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                            ORDER YOUR FAVOURATE DISSERT
                        </button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoupMenu;