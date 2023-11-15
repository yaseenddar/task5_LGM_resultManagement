import { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Student/Home';
import Dashboard from './components/Student/Dashboard';
import ResultDashboard from './components/Teacher/ResultDashboard';

function App() {

    const [student,setStudent] = useState(false);
    const [teacher,setTeacher] = useState(false);
    return (
        <div className='container'>
            <Router>
                <Routes>
                    <Route path="/" element={<Home setStudent={setStudent} setTeacher={setTeacher}/>} />
                    <Route path="/dashboard" element={student && <Dashboard />} />
                    <Route path='/result' element={<ResultDashboard />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
