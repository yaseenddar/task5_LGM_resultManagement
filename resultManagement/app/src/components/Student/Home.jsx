import React, { useRef, useState,useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios'
import StudentContext from '../context/studentContext';
export default function ({ setStudent ,setTeacher}) {
  const rollNumberRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [loader,setLoader] = useState(true);

  const [selectedUserType, setSelectedUserType] = useState('student');

  const {data,setData} = useContext(StudentContext);

  const handleUserTypeClick = (userType) => {
    setSelectedUserType(userType);
  };

 
  const handleClick =async (e) => {
    e.preventDefault();
    

    // Retrieve the input values using the refs
    const inputValue = rollNumberRef.current ? rollNumberRef.current.value : '';
    const usernameValue = usernameRef.current ? usernameRef.current.value : '';
    const passwordValue = passwordRef.current ? passwordRef.current.value : '';
    
    // Check if the inputValue or usernameValue and passwordValue are not empty
    if (selectedUserType === 'student' && inputValue){
      setStudent(selectedUserType === 'student');
      data= {};
      try{
         const res =  await axios.get(`http://localhost:4000/api/student/login/${inputValue}`)
    const result = res.data;
    setData(result)
      }catch(err){
        console.log("error occured ",err);
      }
    if(data){
      console.log(data)
          navigate('/dashboard')
          }

    }
   //for teacher login
    else if(selectedUserType === 'teacher' && (usernameValue && passwordValue)){//for teacher login then call teacher login api 
      setTeacher(selectedUserType === 'teacher')
      try{
   const res =  await axios.post(`http://localhost:4000/api/teacher/login`,{username:usernameValue,password:passwordValue})
   const result = res.data;
        if(result.username){
          
      navigate('/result')
     }
     else{
      
     }
     }catch(err){
       console.log("error occured ",err);
     }

    }

  };
  
  return (
     <>
             <div className='container flex flex-col  rounded-md border-4 shadow-2xl shadow-t-md bg-gray-200 p-6 gap-y-2'>
      <h2 className='text-2xl'>Result Dashboard</h2>
      <div className="loginDAsh flex flex-col justify-center">
        <div className='flex gap-x-4 w-full'>
          <button
            className={selectedUserType === 'student' 
            ? 
            'active border-b-4 border-blue-500 w-[200px] text-white bg-green-600 text-xl' 
            : 
            'bg-white text-xl  font-semibold'}
            onClick={() => handleUserTypeClick('student')}
          >
            Student
          </button>
          <button
            className={selectedUserType === 'teacher' 
            ?
             'active border-b-4 border-blue-500 w-[200px] text-white bg-green-600 text-xl' 
             :
              'bg-white text-xl font-semibold'}
            onClick={() => handleUserTypeClick('teacher')}
          >
            Teacher
          </button>
        </div>

        {selectedUserType === 'student' ? (
          <div className='flex flex-col'>
            <input
              type="number"
              id='rollNumber'
              required
              className='border-2 border-black rounded-md mt-3 p-1 bg-gray-300 placeholder-gray-800'
              ref={rollNumberRef}
              placeholder='Enter the roll Number'
            />
           
          </div>
        ) : (
          <div  className='flex flex-col'>
            <label htmlFor='username' className='text-[10px] font-semibold '>Enter Username:</label>
            <input
              className='border-2 border-black rounded-md mt-3 p-1 bg-gray-300 placeholder-gray-800'
              type="text"
              id='username'
              required
              ref={usernameRef}
              placeholder='Enter username'
            />
            <label htmlFor='password' className='text-[10px] font-semibold '>Enter Password:</label>
            <input
              className='border-2 border-black rounded-md mt-3 p-1 bg-gray-300 placeholder-gray-800'
              type="password"
              id='password'
              required
              ref={passwordRef}
              placeholder='Enter password'
            />
          </div>
        )}

        <button className='button1 bg-green-400 self-center mt-4'  
        onClick={handleClick}>{selectedUserType === 'student' ?'Get Result' : 'Login' }</button>
      </div>
        </div>
        <span className='loader'></span>
     </>

       
     
     
     
    
   
  
  );
        
}
