import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//component imports
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import PatientDetails from './pages/PatientDetails';

function App() {
  return (
      <Router>
        {/* <Header/> */}
        <Sidebar>
          <Routes>
            <Route exact path="/" element={<Dashboard />}>DashBoard</Route>
            <Route exact path="/patients" element={<Patients />}>Patients</Route>
            <Route exact path='/patients/:patientId' element={<PatientDetails />}></Route>
            <Route exact path="/chats" element={<Messages />}>Messages</Route>
            <Route exact path="/profile" element={<Profile />}></Route>
          </Routes>
        </Sidebar>
      </Router>
  );
}

export default App;
