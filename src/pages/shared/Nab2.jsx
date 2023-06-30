// import { useState } from "react";
// import { AiOutlineClose } from 'react-icons/ai';
// import { BiAlignLeft } from 'react-icons/bi';

// const Nab2 = () => {
//     const [isMenuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!isMenuOpen);
//     };
//     return (
//         <div className="bg-slate-500 h-16 ">
//             <div className=" flex justify-around items-center">
//                 <div className="bg-green-300"> logo</div>
//                 <div className="hidden md:block ">
//                     <ul className="flex space-x-6">
//                         <li>Home</li>
//                         <li> Meanu</li>
//                         <li>a</li>
//                     </ul>
//                 </div>
//                 <div className="md:hidden">
//                     <button
//                         onClick={toggleMenu}
//                         className="text-gray-300  focus:outline-none "
//                     >
//                         {isMenuOpen ? <AiOutlineClose /> : <BiAlignLeft />}
//                     </button>
//                 </div>

//             </div>
//             {isMenuOpen && (
//                 <div className="md:hidden">
//                     <ul className="mt-2 space-y-2">
//                         <li>
//                             <a href="/" className="block text-gray-300 hover:text-orange-400">
//                                 Home
//                             </a>
//                         </li>
//                         <li>
//                             <a href="/menu" className="block text-gray-300 hover:text-orange-400">
//                                 Menu
//                             </a>
//                         </li>
//                         {/* Add more dropdown menu links */}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Nab2;