import { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiAlignLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authProvidr/Provider';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import './navbar.css'
// import { HiMenu, HiX } from 'react-icons/hi'; // Example icons from React Icons library


const Navbar = () => {
    const auth = getAuth(app);

    const { user, } = useContext(AuthContext)
    console.log(user);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    // sign Out button ...
    const handelOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch(() => {
            // An error happened.
        });
    };

    const li = (
        <>
            <li className="text-white hover:text-orange-400"> <Link to='/' >Home</Link></li>
            <li className="text-white hover:text-orange-400"> <Link to='/menu' >Menu</Link></li>
            <li className="text-white hover:text-orange-400"> <Link to='shop/salad' >Shop</Link></li>
            <li className="text-white hover:text-orange-400"> <Link to='/contactus'>Contactus</Link></li>
            <li className="text-white hover:text-orange-400"> <Link to='/dashboard' >Dashboard</Link></li>
            {
                user ?
                    (
                        <li className="text-white hover:text-orange-400">
                            <button onClick={handelOut}>Sing OUt</button>
                        </li>
                    ) :
                    (
                        <li> <Link to='/login' className="text-white hover:text-orange-400">Login </Link></li>
                    )
            }

        </>

    )
    return (
        <div >
            <nav className="bg-black">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex justify-around">
                            <div className="">
                                {/* Your logo image or text */}
                                <h1 className='text-2xl text-white hover:text-orange-400'>LOGO</h1>
                            </div>
                            <  div className="hidden md:block">
                                <ul id='navbar' className="ml-96 flex items-center space-x-14">
                                    {li}
                                </ul>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-300  focus:outline-none "
                            >
                                {isMenuOpen ? <AiOutlineClose /> : <BiAlignLeft />}
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <ul className="mt-2 space-y-2">
                                {li}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;