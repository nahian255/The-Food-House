import Card from "../../../component/Card";
import useMenu from "../../../hooks/useMenu";
import OrderOfline from "./OrderOfline";


const ChefRecomCard = () => {

    const [menu] = useMenu()
    const newMenu = menu?.slice(0, 3);

    return (
        <div className="px-10 md:px-24  ">
            <OrderOfline title1={'Should try'} title2={'CHEF RECOMENDED'} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10 pb-10">
                {
                    newMenu?.map(pizza => <Card array={pizza} key={pizza._id}></Card>)
                }
            </div>
        </div>
    );
};

export default ChefRecomCard;