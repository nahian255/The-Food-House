import useMenu from "../../../hooks/useMenu";

const Drinks = () => {
    const [menu] = useMenu()

    const drinks = menu.filter(item => item.category === 'drinks')
    console.log(drinks);
    return (
        <div>
            <h1>drinks</h1>
        </div>
    );
};

export default Drinks;