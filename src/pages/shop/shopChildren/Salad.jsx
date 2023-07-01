import Card from "../../../component/Card";
import useMenu from "../../../hooks/useMenu";

const Salad = () => {
    const [menu] = useMenu()

    const salads = menu.filter(item => item.category === 'salad');
    console.log(salads);
    return (
        <div className="container mx-16 md:mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
                {
                    salads.map(salad => <Card array={salad} key={salad._id}></Card>)
                }
            </div>
        </div>
    );
};

export default Salad;