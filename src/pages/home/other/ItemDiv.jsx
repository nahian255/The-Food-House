import saladImg from '../../../assets/home/slide1.jpg'
import pizzaImg from '../../../assets/home/slide2.jpg'
import dessertImg from '../../../assets/home/slide3.jpg'
import shoupImg from '../../../assets/home/slide4.jpg'
import { Link } from 'react-router-dom';
import OrderOfline from './OrderOfline';


const ItemDiv = () => {
    return (
        <>
            <OrderOfline title1={'from 11:00am to 10:00pm'} title2={'ORDER ONLINE'} />
            <div className="px-10 md:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">

                <Link className='shadow-lg hover:shadow-2xl rounded-lg' to='/shop/salad'>
                    <img className='w-full md:h-3/4 ' src={saladImg} alt="" />
                    <h1 className='font-bold text-4xl text-center p-2  md:mt-10'> Salad</h1>
                </Link>

                <Link className='shadow-lg hover:shadow-2xl rounded-lg' to='/shop/pizza'>
                    <img className='w-full md:h-3/4' src={pizzaImg} alt="" />
                    <h1 className='font-bold text-4xl text-center p-2  md:mt-10'>Pizza</h1>
                </Link>
                <Link className='shadow-lg hover:shadow-2xl rounded-lg' to='/shop/soup'>
                    <img className='w-full md:h-3/4' src={dessertImg} alt="" />
                    <h1 className='font-bold text-4xl text-center p-2  md:mt-10'> Shoup</h1>
                </Link>
                <Link className='shadow-lg hover:shadow-2xl rounded-lg' to='/shop/dessert'>
                    <img className='w-full md:h-3/4' src={shoupImg} alt="" />
                    <h1 className='font-bold text-4xl text-center p-2  md:mt-10'> Dessert</h1>
                </Link>

            </div>
        </>

    );
};

export default ItemDiv;