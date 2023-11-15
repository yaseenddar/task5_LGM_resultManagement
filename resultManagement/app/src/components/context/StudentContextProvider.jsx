import StudentContext from "./studentContext";
import React, { useState } from "react";

const StudentContextProvider = ({children}) =>{
    const [data,setData] = useState({});
    const [student,setStudent] = useState(false);
    const [teacher,setTeacher] = useState(false)
    return(
        <StudentContext.Provider value={{data,setData,student,setStudent,teacher,setTeacher}}>
            {children}
        </StudentContext.Provider>
    )}

    export default StudentContextProvider;