
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 h-60">
            <div className="container mx-auto flex justify-between">
                <div className="flex items-center">
                    <img className="h-8 w-8 mr-2" src="/logo.png" alt="Logo" />
                    <span className="text-xl font-semibold">Your Website</span>
                </div>
                <div className="flex items-center">
                    <a href="#" className="text-gray-400 hover:text-white px-3">
                        Home
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white px-3">
                        About
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white px-3">
                        Services
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white px-3">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
