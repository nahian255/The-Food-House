import Card from "../../../component/Card";
import useMenu from "../../../hooks/useMenu";

const Dessert = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')

    return (
        <div className="container mx-16 md:mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
                {
                    desserts.map(dessert => <Card array={dessert} key={dessert._id}></Card>)
                }
            </div>
        </div>
    );
};

export default Dessert;