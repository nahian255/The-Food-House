import singupimg from '../../assets/others/authentication2.png'
import backgrounImg from '../../assets/others/authentication.png'
import { useContext } from 'react';
import { AuthContext } from '../../authProvidr/Provider';
import { useNavigate } from 'react-router-dom';


const SingUp = () => {
    const { singUp } = useContext(AuthContext)
    const navigate = useNavigate()

    // const na = useContext(AuthContext)
    // console.log(na);

    const handelSubmit = (e) => {
        e.preventDefault();
        // const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        // const singUpInfo = { name, email, password }

        singUp(email, password)
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
                // ..
            });

        navigate('/')
        // console.log(singUpInfo);
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ background: `url(${backgrounImg})` }}>
            <div className="container mx-auto shadow-md rounded-md p-8 md:flex">
                <div className="md:w-1/2 md:px-24">
                    <h2 className="text-4xl font-bold mb-4">Sing Up</h2>
                    <form onSubmit={handelSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="name"
                                id="name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
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
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </form>
                </div>
                <div className="md:w-1/2">
                    <img
                        src={singupimg}
                        alt="Login Image"
                        className="w-full h-auto rounded-md"
                    />
                </div>

            </div>
        </div>
    );
};

export default SingUp;