import Lottie from 'lottie-react';
import logo from '../../assets/logo/Justice balance law.json';
import Swal from 'sweetalert2';

const MainPages = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const year = form.year.value;
        const month = form.month.value;
        const email = form.email.value;
        const university = form.university.value;
        const whatappNumber = form.whatappNumber.value;
        const phoneNumber = form.phoneNumber.value;
        const address = form.address.value;

        const data = { year, month, name, email,university, whatappNumber, phoneNumber, address,}
        console.log(data)

        fetch('http://localhost:5000/student', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
                Swal.fire({
                    title: "Submit Successfull!",
                    icon: "success",
                    draggable: true
                });
            })
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center px-4 py-8">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden">
                {/* Left Side - Text + Animation */}
                <div className="lg:w-1/2 p-8 bg-blue-100 flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl font-extrabold text-blue-800 mb-2">Welcome to Civil Laws</h1>
                    <h2 className="text-2xl font-semibold text-blue-700 mb-6">Intensive Course Registration</h2>
                    <div className="w-64 h-64">
                        <Lottie animationData={logo} loop={true} />
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="lg:w-1/2 p-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register Now</h3>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mt-6">
                            {/* Year Dropdown */}
                            <div className="w-full md:w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Select Year</label>
                                <select
                                    defaultValue="" name='year'
                                    className="select select-bordered w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="" disabled>Select Year</option>
                                    <option>2027</option>
                                    <option>2026</option>
                                    <option>2025</option>
                                    <option>2024</option>
                                    <option>2023</option>
                                    <option>2022</option>
                                    <option>2021</option>
                                </select>
                            </div>

                            {/* Batch Month Dropdown */}
                            <div className="w-full md:w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Batch Month</label>
                                <select
                                    defaultValue="" name='month'
                                    className="select select-bordered w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="" disabled>Batch Month</option>
                                    <option>Jan-Feb</option>
                                    <option>Mar-Apr</option>
                                    <option>May-Jun</option>
                                    <option>Jul-Aug</option>
                                    <option>Sep-Oct</option>
                                    <option>Nov-Dec</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600">Full Name</label>
                            <input
                                type="text" name='name'
                                placeholder="Your Name"
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Email Address</label>
                            <input
                                type="email" name='email'
                                placeholder="example@mail.com"
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600"> University Name</label>
                            <input
                                type="text" name='university'
                                placeholder="University-Name"
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">WhatsApp Number</label>
                            <input
                                type="text" name='whatappNumber'
                                placeholder="+8801XXXXXXXXX"
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                            <input
                                type="text" name='phoneNumber'
                                placeholder="Phone-Number"
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600">Home Address</label>
                            <input
                                type="text" name='address'
                                placeholder="Home-Address"
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MainPages;
