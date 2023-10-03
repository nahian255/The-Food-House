import useMenu from "../../../hooks/useMenu";
import Card from "../../../component/Card";
import { useEffect } from "react";


const Pizza = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(5, 2);
    }, []);

    const [menu] = useMenu()
    const pizzas = menu.filter(item => item.category === 'pizza')

    return (
        <div className="container mx-16 md:mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
                {
                    pizzas.map(pizza => <Card array={pizza} key={pizza._id}></Card>)
                }
            </div>
        </div>
    );
};

export default Pizza;