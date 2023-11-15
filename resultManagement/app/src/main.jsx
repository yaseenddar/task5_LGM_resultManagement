import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StudentContextProvider from './components/context/studentContextProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<StudentContextProvider>
   <React.StrictMode>
    <App />
  </React.StrictMode>
</StudentContextProvider>

 
)
