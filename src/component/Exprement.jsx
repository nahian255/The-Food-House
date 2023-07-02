
const Exprement = () => {
    return (
        <section className="beautiful-cards-section bg-gray-100 py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card p-6 bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-blue-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 13a1 1 0 112 0 1 1 0 01-2 0zm2-7a1 1 0 11-2 0 1 1 0 012 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                            <p className="text-gray-600">123-456-7890</p>
                        </div>
                    </div>

                    <div className="card p-6 bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-blue-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 13a1 1 0 112 0 1 1 0 01-2 0zm2-7a1 1 0 11-2 0 1 1 0 012 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                            <p className="text-gray-600">123 Main Street, City, Country</p>
                        </div>
                    </div>

                    <div className="card p-6 bg-white rounded-lg shadow-lg">
                        <div className="flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-blue-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 13a1 1 0 112 0 1 1 0 01-2 0zm2-7a1 1 0 11-2 0 1 1 0 012 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-gray-800">Working Hours</h3>
                            <p className="text-gray-600">Mon - Fri: 9am - 5pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exprement;
