import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//component imports
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Messages from './pages/Messages';
import Header from './components/Header';

function App() {
  return (
      <Router>
        {/* <Header/> */}
        <Sidebar>
          <Routes>
            <Route exact path="/" element={<Dashboard />}>DashBoard</Route>
            <Route exact path="/patients" element={<Patients />}>Patients</Route>
            <Route exact path="/chats" element={<Messages />}>Messages</Route>
          </Routes>
        </Sidebar>
      </Router>
  );
}

export default App;
