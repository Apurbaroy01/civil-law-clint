import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = e.target.search.value.trim();
        if (data) {
            navigate(`/studentData?search=${encodeURIComponent(data)}`);
        }
    };

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
                
                {/* Logo */}
                <Link to="/">
                    <div className="text-2xl font-bold text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition duration-200">
                        Civil Laws<span className="text-blue-500 dark:text-blue-300"> Course</span>
                    </div>
                </Link>

                {/* Search Bar */}
                <div className="flex items-center w-full max-w-md relative">
                    <span className="absolute left-4 top-3 text-gray-400 dark:text-gray-300">
                        <FaSearch />
                    </span>
                    <form onSubmit={handleSubmit} className="w-full">
                        <input
                            type="text"
                            name="search"
                            placeholder="Type your name & roll..."
                            className="w-full pl-10 pr-24 py-2 rounded-full border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                        />
                        <button
                            type="submit"
                            className="absolute right-1 top-1 bottom-1 px-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white rounded-full text-sm font-medium transition"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
