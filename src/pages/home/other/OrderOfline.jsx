
const OrderOfline = ({ title1, title2 }) => {
    return (
        <div className="py-10 container mx-auto">
            <p className="text-center">--- {title1} ----</p>
            {/* <hr className="w-1/5 px-10" /> */}
            <h1 className="text-center font-bold text-4xl my-4"> {title2} </h1>


        </div>
    );
};

export default OrderOfline;