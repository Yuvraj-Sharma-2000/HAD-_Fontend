import './App.css'
import {BrowserRouter as Router, Routes, Route, Redire} from 'react-router-dom';

//component imports
// import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import PatientDetails from './pages/PatientDetails';
import LoginComponent from './pages/Login';

function App() {

    const accessToken = window.localStorage.getItem('access-token');


  return (
    <>
      <Router>
          <Routes>
                          <Route exact path="/" element={<LoginComponent />} />
                          <Route exact path="/dashboard" element={<Dashboard />}>DashBoard</Route>
                          <Route exact path="/patients" element={<Patients />}>Patients</Route>
                          <Route exact path='/patients/:patientId' element={<PatientDetails />}></Route>
                          <Route exact path="/chats" element={<Messages />}>Messages</Route>
                          <Route exact path="/profile" element={<Profile />}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
