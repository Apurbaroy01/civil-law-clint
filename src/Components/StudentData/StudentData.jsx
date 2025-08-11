const StudentDatas = ({ students }) => {
  const { name, email, address, university, year, roll, month, exam1, exam2, exam3, exam4, exam5 } = students;

  const student = {
    subjects: [
      { code: "", name: "Limitation Act", ct: "Exam-1", qt: exam1 },
      { code: "", name: "Specific Relief Act", ct: "Exam-2", qt: exam2 },
      { code: "", name: "The Code of Civil Procedure", ct: "Exam-3", qt: exam3 },
      { code: "", name: "Full model Test on Civil Law", ct: "Exam-4", qt: exam4 },
      { code: "", name: "Total Number", ct: "Total Number =", qt: exam5 },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 my-10 border border-gray-200 dark:border-gray-700 print:border-none print:shadow-none transition-colors duration-300">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400 mb-1">
          Civil Laws Course Report
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <p><span className="font-semibold">Student Name:</span> {name}</p>
        <p><span className="font-semibold">Class Roll: </span>{year}-{roll}</p>
        <p><span className="font-semibold">University:</span> {university}</p>
        <p><span className="font-semibold">Session:</span> {month}</p>
        <p><span className="font-semibold">Home address:</span> {address}</p>
        <p><span className="font-semibold">Email:</span> {email}</p>
        <p><span className="font-semibold">Teacher Name:</span> SHANTO DEB ROY ARNO</p>
        <p><span className="font-semibold">Teacher Phone:</span> +8801518972493</p>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden transition-colors duration-300">
          <thead className="bg-blue-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <tr>
              <th className="py-2 px-4 border dark:border-gray-700">Subject Code</th>
              <th className="py-2 px-4 border dark:border-gray-700 text-left">Subject Name</th>
              <th className="py-2 px-4 border dark:border-gray-700">Exam No</th>
              <th className="py-2 px-4 border dark:border-gray-700">Marks</th>
            </tr>
          </thead>
          <tbody className="text-center dark:text-gray-200">
            {student.subjects.map((sub, idx) => (
              <tr key={idx} className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <td className="py-2 px-4 border dark:border-gray-700">{sub.code}</td>
                <td className="py-2 px-4 border dark:border-gray-700 text-left">{sub.name}</td>
                <td className="py-2 px-4 border dark:border-gray-700">{sub.ct}</td>
                <td className="py-2 px-4 border dark:border-gray-700">{sub.qt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex justify-center print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition duration-300"
        >
          Print Result Sheet
        </button>
      </div>
    </div>
  );
};

export default StudentDatas;
