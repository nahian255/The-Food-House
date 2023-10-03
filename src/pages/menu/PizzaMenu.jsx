import { Link } from "react-router-dom";
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import PagesBanner from "../shared/PagesBanner";
import useMenu from "../../hooks/useMenu";


const PizzaMenu = () => {
    const [menu] = useMenu()
    const pizzas = menu.filter(item => item.category === 'pizza')
    const pizzasMenu = pizzas.slice(0, 6);

    return (
        <div className="pt-12">
            <PagesBanner image={pizzaImg} title={'Pizza'}></PagesBanner>
            <div className="container mx-auto py-8">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 ">
                        <tbody className=" ">
                            {pizzasMenu.map((item, index) => (
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
                        <Link to='/shop/pizza'><button className="bg-orange-300 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                            ORDER YOUR FAVOURATE PIZZA
                        </button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaMenu;