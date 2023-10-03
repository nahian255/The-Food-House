import loginImg from '../../assets/others/authentication2.png'
import background from '../../assets/others/authentication.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../authProvidr/Provider';


const Longin = () => {

    const { login, googleSingIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handelLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        login(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);

            });
        navigate('/')
    };

    // google Login 
    const handelGoogleSignIn = () => {
        googleSingIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                // Handle Errors here.
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ background: `url(${background})` }}>
            <div className="container mx-auto shadow-md rounded-md p-8 md:flex">
                <div className="md:w-1/2 md:px-10">
                    <img
                        src={loginImg}
                        alt="Login Image"
                        className="w-full h-auto rounded-md"
                    />
                </div>
                <div className="md:w-1/2 md:px-24 ">
                    <h2 className="text-4xl font-bold mb-4">Login</h2>
                    <form onSubmit={handelLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block font-medium mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-orange-300 text-white rounded-md hover:bg-blue-600"
                        >
                            Login
                        </button>
                        <Link to='/singup'> <p className='text-center mt-4 text-orange-400'>new here? create a new account </p>
                        </Link>
                        <p className='text-center mt-3'> or sing in with </p>
                        <div className=' flex justify-center gap-6 items-center mt-4'>
                            <button className="rounded-full bg-blue-200 text-4xl text-black py-2 px-4 hover:bg-blue-600">
                                F
                            </button>
                            <button onClick={handelGoogleSignIn} className="rounded-full bg-blue-200 text-4xl text-black py-2 px-4 hover:bg-blue-600">
                                G
                            </button>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Longin;