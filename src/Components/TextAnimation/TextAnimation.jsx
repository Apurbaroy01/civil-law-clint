
import { Link } from 'react-router-dom';

const TextAnimation = () => {
    return (
        <div className="w-11/12 max-w-4xl mx-auto my-6 rounded-lg border-2 border-amber-400 bg-yellow-50 shadow-md flex items-center overflow-hidden">
            <div className="bg-amber-400 px-4 py-2 rounded-l-lg flex items-center">
                <p className="text-white font-bold text-lg tracking-wide select-none">Note</p>
            </div>
            <marquee
                className="text-red-600 font-semibold text-lg whitespace-nowrap"
                
                
            >
                <Link>আপনার রেজাল্ট দেখার জন্য উপরের সার্চ বক্সের মধ্যে ইমেইল লিখে সার্চ করুন ...</Link>
                
            </marquee>
        </div>
    );
};

export default TextAnimation;
