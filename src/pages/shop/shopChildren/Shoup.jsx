import { useEffect } from "react";
import Card from "../../../component/Card";
import useMenu from "../../../hooks/useMenu";

const Shoup = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(5, 2);
    }, []);

    const [menu] = useMenu()
    const soups = menu.filter(item => item.category === 'soup')

    return (
        <div className="container mx-16 md:mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
                {
                    soups.map(soup => <Card array={soup} key={soup._id}></Card>)
                }
            </div>
        </div>
    );
};

export default Shoup;