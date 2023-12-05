
const Card = ({ array }) => {

    const { name, image, recipe, } = array
    return (
        <div className=" rounded overflow-hidden shadow-lg">
            <img className="w-full lg:h-48 object-cover" src={image} alt="Card Image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{recipe}</p>
            </div>
            <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to card
                </button>
            </div>
        </div>
    );
};

export default Card;