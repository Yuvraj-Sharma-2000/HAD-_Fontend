import Sidebar from '../components/Sidebar'
// import ProgressBar from 'react-bootstrap/ProgressBar'

import Requests from '../components/Requests'
const Dashboard = () => {
    return ( 
        <>
        <Sidebar>
        <div className="container-fluid p-5" style={{height:"80vh"}}>
            <div style={{backgroundColor:"#d8d9d8"}} className='row justify-content-center'>
                <h5 style={{margin:'5px 5px'}} className='row'>My Dashboard</h5>
                <div className="col col-md-5 m-2" style={{backgroundColor:"#bfbebe"}}>
                    <div className="row align-items-start p-2">Active Patients</div>
                    <h4 className="row align-items-end p-2">Active patients count</h4>
                </div>
                <div className="col col-md-5 m-2" style={{backgroundColor:"#bfbebe"}}>
                    <div className="row align-items-start p-2">Total Patients</div>
                    <h4 className="row align-items-end p-2">Total patients count</h4>
                </div>
            </div>
            <div style={{backgroundColor:"#d8d9d8", overflow:"auto"}} className='row justify-content-center py-2 mt-5'>
                <div className="col-12">
                    <h5>Requests</h5>
                </div>
                <Requests />
            </div>
        </div>
        </Sidebar>
        </>
    );
}
 
export default Dashboard;