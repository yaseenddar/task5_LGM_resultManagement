import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

export default function ResultTable() {
  const [addedResult, setAddedResult] = useState([]);
  const navigate = useNavigate();
  const fetchResult = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/teacher/fetch');
      setAddedResult(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchResult();
  }, [addedResult]);

  const deleteHandler = async (roll) => {
    try {
      // Send a DELETE request to delete the record by roll number
      await axios.delete('http://localhost:4000/api/teacher/delete', { data: { roll } });
      // Fetch the updated result after deletion
      fetchResult();
    } catch (error) {
      console.error('Error:', error);
    }
  };

const logoutHandler =()=>{
 
  navigate('/')

}
  return (
    <div className='border-4 border-green-500 rounded-md p-1'>
      <button onClick={logoutHandler} className='absolute right-3 top-2 bg-gray-300 '>log out</button>
      <h3 className='text-2xl font-semibold mb-3 text-center'>Added Result</h3>
      <table className='w-full table-auto'>
        <thead>
          <tr className='bg-blue-500 text-white'>
            <th className='py-2 px-4'>Student Name</th>
            <th className='py-2 px-4'>Roll Number</th>
            <th className='py-2 px-4'>Math</th>
            <th className='py-2 px-4'>English</th>
            <th className='py-2 px-4'>Science</th>
            <th className='py-2 px-4'>Status</th>
            <th className='py-2 px-4'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addedResult.map((data) => (
            <tr key={data.roll} className='bg-gray-400 border-2 '>
              <td className='py-2 px-4'>{data.name}</td>
              <td className='py-2 px-4'>{data.roll}</td>
              <td className='py-2 px-4'>{data.math}</td>
              <td className='py-2 px-4'>{data.english}</td>
              <td className='py-2 px-4'>{data.science}</td>
              <td className='py-2 px-4'>{data.status}</td>
              <td className='py-2 px-4'>
                <button className='bg-gray-300 hover:bg-green-400' onClick={() => deleteHandler(data.roll)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
