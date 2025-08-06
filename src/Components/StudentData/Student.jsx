import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StudentDatas from "./StudentData"; // অথবা StudentData.jsx
import { RotatingLines } from "react-loader-spinner";

const Student = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get("search") || "";

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/student")
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter(student => {
                    const searchTerm = search.toLowerCase();

                    return (
                        // student.name?.toLowerCase().includes(searchTerm) ||
                        // student.roll?.toString().includes(searchTerm) ||
                        student.email?.toLowerCase().includes(searchTerm)
                    );
                });

                setStudents(filtered);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching students:", err);
                setStudents([]);
                setLoading(false);
            });
    }, [search]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-xl font-semibold mb-4">
                Search Result for: <span className="text-blue-600">{search}</span>
            </h2>

            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <RotatingLines
                        visible={true}
                        height="96"
                        width="96"
                        color="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>

            ) : students.length > 0 ? (
                students.map(student => (
                    <StudentDatas key={student._id} students={student} />
                ))
            ) : (
                <p className="text-red-500 text-center">No student found.</p>
            )}
        </div>
    );
};

export default Student;
