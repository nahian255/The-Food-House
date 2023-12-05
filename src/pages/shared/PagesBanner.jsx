
// import img from '../../assets/menu/banner3.jpg'
const PagesBanner = ({ image, title, subTitle }) => {
    return (
        <div>
            <section
                className="banner  bg-cover bg-center h-[200px] md:[300px] lg:h-[500px] flex items-center justify-center relative"
                style={{
                    backgroundImage: `url(${image})`,
                    //  filter: 'blur(1px)',
                }}
            >
                <div className=" absolute md:w-[500px] lg:w-[900px] md:h-[150px] lg:h-[200px] bg-black opacity-20 rounded-xl"></div>
                <div className=" text-white text-center  ">
                    <h1 className="text-4xl md:text-4xl lg:text-8xl font-bold ">{title}</h1>
                    <p className="mt-4 text-xl">{subTitle}</p>
                </div>
            </section>
        </div>
    );
};

export default PagesBanner;