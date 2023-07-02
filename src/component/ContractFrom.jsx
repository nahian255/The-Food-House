// import { useState } from 'react';

const ContactForm = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [message, setMessage] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Perform form submission or any other desired action
    //     // Here, you can send the form data to the server or display a success message
    //     console.log('Form submitted!');
    // };

    return (
        <section id="contactMe" className="bg-gray-100 ">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        Contact Us
                    </h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                rows="5"
                            ></textarea>
                        </div>
                        <div className="flex items-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Send Message
                            </button>
                            {/* <div className="ml-4">
                                <span className="text-gray-600 text-sm font-medium">
                                    Connect with me:
                                </span>
                                <a href="#" className="text-blue-500 hover:text-blue-700 ml-2">
                                    Twitter
                                </a>
                                <a href="https://www.linkedin.com/in/mutawchid-nahian-682337280/" className="text-blue-500 hover:text-blue-700 ml-2">
                                    LinkedIn
                                </a>
                                <a href="https://github.com/nahian255" className="text-blue-500 hover:text-blue-700 ml-2">
                                    GitHub
                                </a>
                            </div> */}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
