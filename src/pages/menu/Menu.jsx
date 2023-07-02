import PagesBanner from "../shared/PagesBanner";
import image from "../../assets/menu/banner3.jpg"
import DessertMenu from "./DessertMenu";
import PizzaMenu from "./PizzaMenu";
import SalladMenu from "./SalladMenu";
import ShoupMenu from "./ShoupMenu";


const Menu = () => {


    return (
        <div>
            <PagesBanner image={image} title={'Menu Section'} subTitle={'we can see the all menu here and also pick your favourite'} />
            <div className="py-10 container mx-auto">
                <h1 className="text-center font-bold text-4xl"> today&apos;s offer</h1>
                <p className="text-xl mt-4">Experience the delightful flavors of our special menu crafted just    , for      you.
                    Indulge in our mouthwatering pizzas made with the finest ingredients and a variety of toppings. Whether you prefer classic Margherita, spicy Pepperoni, or exotic Hawaiian, we have the perfect pizza to satisfy your cravings.
                    Enjoy our refreshing and nutritious salads that combine a mix of fresh vegetables, flavorful dressings, and crunchy toppings. From Caesar Salad to Greek Salad, our salads are the perfect choice for a healthy and tasty meal.

                </p>

            </div>
            <SalladMenu />
            <PizzaMenu />
            <ShoupMenu />
            <DessertMenu />



        </div>
    );
};

export default Menu;