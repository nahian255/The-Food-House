import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";

const MenuList = () => {

    const [menu] = useMenu()
    const newMenu = menu?.slice(0, 6);
    console.log(newMenu);

    return (
        <div className='px-10 md:px-24'>
            <div className="container mx-auto py-8">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 ">
                        <tbody className=" ">
                            {newMenu?.map((item, index) => (
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
                        <Link to='/menu'><button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                            View All Menu
                        </button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuList;