import { useEffect } from "react";
import Card from "../../../component/Card";
import useMenu from "../../../hooks/useMenu";

const Drinks = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(5, 2);
    }, []);

    const [menu] = useMenu()
    const drinkses = menu.filter(item => item.category === 'drinks')


    return (
        <div className="container mx-16 md:mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
                {
                    drinkses.map(drink => <Card array={drink} key={drink._id}></Card>)
                }
            </div>
        </div>
    );
};

export default Drinks;