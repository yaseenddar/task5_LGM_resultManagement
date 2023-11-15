import React from 'react';
import './Dashboard.css'; // Import additional styles if needed
import StudentContext from '../context/studentContext';

const Dashboard = () => {
  const { data } = React.useContext(StudentContext);
  const student = data.result;

  return (
    
    <div className='ResultInfo p-4 rounded-md w-120 h-96'>
      <div className="information mb-4">
        <h3 className='text-2xl font-semibold mb-2'>Student Information</h3>
        <p className='mb-2 text-lg'><span className='font-semibold'>Student Name:</span> {student.name}</p>
        <p className='mb-2 text-lg'><span className='font-semibold'>Roll Number:</span> {student.roll}</p>
        <p className='mb-2 text-lg'><span className='font-semibold'>Status:</span> {student.status}</p>
        <p className='mb-2 text-lg'><span className='font-semibold'>Total:</span> {parseInt(student.math) + parseInt(student.science) + parseInt(student.english)}</p>
      </div>

      <div className="result">
        <table className='table w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-blue-300'>
              <th className='py-2 px-4 text-lg text-left'>Subject</th>
              <th className='py-2 px-4 text-lg text-left'>Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='py-2 px-4 text-lg'>Math</td>
              <td className='py-2 px-4 text-lg'>{student.math}</td>
            </tr>
            <tr>
              <td className='py-2 px-4 text-lg'>Science</td>
              <td className='py-2 px-4 text-lg'>{student.science}</td>
            </tr>
            <tr>
              <td className='py-2 px-4 text-lg'>English</td>
              <td className='py-2 px-4 text-lg'>{student.english}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
