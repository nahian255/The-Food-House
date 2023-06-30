import { useState } from "react";
import useMenu from "../../../hooks/useMenu";


const Pizza = () => {
    const [menu] = useMenu()

    const pizza = menu.filter(item => item.category === 'pizza')
    console.log(pizza);

    const itemsPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the start and end index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the data array for the current page
    const slicedData = pizza.slice(startIndex, endIndex);

    // Handle pagination button click
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <div>
            <h1>pizza</h1>
            <div>
                <div className="flex flex-row gap-16">
                    {/* Render the card components */}
                    {slicedData.map((item) => (
                        // console.log(item)
                        // <Card key={item.id} data={item} />
                        <>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={item.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {item.name}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Fashion</div>
                                        <div className="badge badge-outline">Products.</div>
                                    </div>
                                </div>
                            </div>
                        </>

                    ))}
                </div>


                {/* Pagination controls */}
                <div>
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </button>

                    {/* Render page number links if desired */}
                    {pizza.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            disabled={currentPage === index + 1}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        disabled={currentPage === Math.ceil(pizza.length / itemsPerPage)}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pizza;