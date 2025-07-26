import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo/Brand */}
                <div className="text-2xl font-bold text-blue-800 hover:text-blue-900 transition duration-200">
                    Civil Laws<span className="text-blue-500"> Course</span>
                </div>

                {/* Search Bar */}
                <div className="relative w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Type youe name.."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
