import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Display from './Display';

const ResultDashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    roll: '',
    status: '',
    math: '',
    science: '',
    english: '',
  });

  const [addedResult, setAddedResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your server endpoint
      const response = await axios.post('http://localhost:4000/api/teacher/add', formData);

      // Update the addedResult state with the response data
      setAddedResult(response.data.result);

      // Clear the form after successful submission
      setFormData({
        name: '',
        roll: '',
        status: '',
        math: '',
        science: '',
        english: '',
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <div className='flex '>
      {/* Left Side - Form to Add Result */}
      <div className='ResultDashboard p-6 rounded-md w-96 h-auto border-4 border-green-500 mr-4'>
        <h3 className='text-2xl font-semibold mb-3'>Add Student Result</h3>

        <form onSubmit={handleSubmit} className='grid grid-cols-2'>
        <label htmlFor='name' className='block text-lg mb-2'>Student Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='border-2 border-gray-300 rounded-md mb-3 p-2'
        />

        <label htmlFor='roll' className='block text-lg mb-2'>Roll Number:</label>
        <input
          type='text'
          id='roll'
          name='roll'
          value={formData.roll}
          onChange={handleChange}
          className='border-2 border-gray-300 rounded-md mb-3 p-2'
        />

        <label htmlFor='status' className='block text-lg mb-2'>Status:</label>
        <input
          type='text'
          id='status'
          name='status'
          value={formData.status}
          onChange={handleChange}
          className='border-2 border-gray-300 rounded-md mb-3 p-2'
        />

        <label htmlFor='math' className='block text-lg mb-2'>Math Marks:</label>
        <input
          type='text'
          id='math'
          name='math'
          value={formData.math}
          onChange={handleChange}
          className='border-2 border-gray-300 rounded-md mb-3 p-2'
        />

        <label htmlFor='science' className='block text-lg mb-2'>Science Marks:</label>
        <input
          type='text'
          id='science'
          name='science'
          value={formData.science}
          onChange={handleChange}
          className='border-2 border-gray-300 rounded-md mb-3 p-2'
        />

        <label htmlFor='english' className='block text-lg mb-2'>English Marks:</label>
        <input
          type='text'
          id='english'
          name='english'
          value={formData.english}
          onChange={handleChange}
          className='border-2 border-gray-300 rounded-md mb-3 p-2'
        />
          <button type='submit' className='button1 bg-green-400 self-center mt-4'>
            Add Result
          </button>
        </form>
      </div>

      {/* Right Side - Display Added Result */}
     <Display/>
    </div>
  );
};

export default ResultDashboard;
