import ProgressBar from 'react-bootstrap/ProgressBar'

const Dashboard = () => {
    return ( 
        <>
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
            <div style={{backgroundColor:"#d8d9d8", overflow:"auto"}} className='row justify-content-center py-2 mt-5 h-75'>
                <div className="col-12">
                    <h5>Requests</h5>
                </div>
                <div className="col-12 col-md-11 row align-items-center justify-content-between p-2 mt-2" style={{backgroundColor:"#bfbebe", borderRadius:"10px"}}>
                    <div className="col-12 col-md-auto" style={{backgroundColor:"#bfbebe"}}>Patients name</div>
                    <div className="col-12 col-md-7 row justify-content-between" style={{backgroundColor:"#bfbebe"}}>
                        <div className="col-4 col-md-1 offset-md-1">Severity</div>
                        <div className="col-6 col-md-8">
                            <ProgressBar variant="success" now={60}/>
                        </div>  
                    </div>
                    <div className="col-6 col-md-1 offset-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Accept</button></div>
                    <div className="col-6 col-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Reject</button></div>
                </div>
                <div className="col-12 col-md-11 row align-items-center justify-content-between p-2 mt-2" style={{backgroundColor:"#bfbebe", borderRadius:"10px"}}>
                    <div className="col-12 col-md-auto" style={{backgroundColor:"#bfbebe"}}>Patients name</div>
                    <div className="col-12 col-md-7 row justify-content-between" style={{backgroundColor:"#bfbebe"}}>
                        <div className="col-4 col-md-1 offset-md-1">Severity</div>
                        <div className="col-6 col-md-8">
                            <ProgressBar variant="success" now={60}/>
                        </div>  
                    </div>
                    <div className="col-6 col-md-1 offset-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Accept</button></div>
                    <div className="col-6 col-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Reject</button></div>
                </div>
                <div className="col-12 col-md-11 row align-items-center justify-content-between p-2 mt-2" style={{backgroundColor:"#bfbebe", borderRadius:"10px"}}>
                    <div className="col-12 col-md-auto" style={{backgroundColor:"#bfbebe"}}>Patients name</div>
                    <div className="col-12 col-md-7 row justify-content-between" style={{backgroundColor:"#bfbebe"}}>
                        <div className="col-4 col-md-1 offset-md-1">Severity</div>
                        <div className="col-6 col-md-8">
                            <ProgressBar variant="success" now={60}/>
                        </div>  
                    </div>
                    <div className="col-6 col-md-1 offset-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Accept</button></div>
                    <div className="col-6 col-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Reject</button></div>
                </div>
                <div className="col-12 col-md-11 row align-items-center justify-content-between p-2 mt-2" style={{backgroundColor:"#bfbebe", borderRadius:"10px"}}>
                    <div className="col-12 col-md-auto" style={{backgroundColor:"#bfbebe"}}>Patients name</div>
                    <div className="col-12 col-md-7 row justify-content-between" style={{backgroundColor:"#bfbebe"}}>
                        <div className="col-4 col-md-1 offset-md-1">Severity</div>
                        <div className="col-6 col-md-8">
                            <ProgressBar variant="success" now={60}/>
                        </div>  
                    </div>
                    <div className="col-6 col-md-1 offset-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Accept</button></div>
                    <div className="col-6 col-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Reject</button></div>
                </div>
                <div className="col-12 col-md-11 row align-items-center justify-content-between p-2 mt-2" style={{backgroundColor:"#bfbebe", borderRadius:"10px"}}>
                    <div className="col-12 col-md-auto" style={{backgroundColor:"#bfbebe"}}>Patients name</div>
                    <div className="col-12 col-md-7 row justify-content-between" style={{backgroundColor:"#bfbebe"}}>
                        <div className="col-4 col-md-1 offset-md-1">Severity</div>
                        <div className="col-6 col-md-8">
                            <ProgressBar variant="success" now={60}/>
                        </div>  
                    </div>
                    <div className="col-6 col-md-1 offset-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Accept</button></div>
                    <div className="col-6 col-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Reject</button></div>
                </div>
                <div className="col-12 col-md-11 row align-items-center justify-content-between p-2 mt-2" style={{backgroundColor:"#bfbebe", borderRadius:"10px"}}>
                    <div className="col-12 col-md-auto" style={{backgroundColor:"#bfbebe"}}>Patients name</div>
                    <div className="col-12 col-md-7 row justify-content-between" style={{backgroundColor:"#bfbebe"}}>
                        <div className="col-4 col-md-1 offset-md-1">Severity</div>
                        <div className="col-6 col-md-8">
                            <ProgressBar variant="success" now={60}/>
                        </div>  
                    </div>
                    <div className="col-6 col-md-1 offset-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Accept</button></div>
                    <div className="col-6 col-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Reject</button></div>
                </div>
                <div className="col-12 col-md-11 row align-items-center justify-content-between p-2 mt-2" style={{backgroundColor:"#bfbebe", borderRadius:"10px"}}>
                    <div className="col-12 col-md-auto" style={{backgroundColor:"#bfbebe"}}>Patients name</div>
                    <div className="col-12 col-md-7 row justify-content-between" style={{backgroundColor:"#bfbebe"}}>
                        <div className="col-4 col-md-1 offset-md-1">Severity</div>
                        <div className="col-6 col-md-8">
                            <ProgressBar variant="success" now={60}/>
                        </div>  
                    </div>
                    <div className="col-6 col-md-1 offset-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Accept</button></div>
                    <div className="col-6 col-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Reject</button></div>
                </div>
                <div className="col-12 col-md-11 row align-items-center justify-content-between p-2 mt-2" style={{backgroundColor:"#bfbebe", borderRadius:"10px"}}>
                    <div className="col-12 col-md-auto" style={{backgroundColor:"#bfbebe"}}>Patients name</div>
                    <div className="col-12 col-md-7 row justify-content-between" style={{backgroundColor:"#bfbebe"}}>
                        <div className="col-4 col-md-1 offset-md-1">Severity</div>
                        <div className="col-6 col-md-8">
                            <ProgressBar variant="success" now={60}/>
                        </div>  
                    </div>
                    <div className="col-6 col-md-1 offset-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Accept</button></div>
                    <div className="col-6 col-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Reject</button></div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Dashboard;