import { useEffect } from "react";
import Card from "../../../component/Card";
import useMenu from "../../../hooks/useMenu";

const Salad = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(5, 2);
    }, []);

    const [menu] = useMenu()
    const salads = menu.filter(item => item.category === 'salad');

    return (
        <div className="px-10 md:px-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 py-10">
                {
                    salads.map(salad => <Card array={salad} key={salad._id}></Card>)
                }
            </div>
        </div>
    );
};

export default Salad;