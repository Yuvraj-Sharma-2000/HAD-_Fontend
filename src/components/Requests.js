import axios from 'axios'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {useEffect, useState} from "react";
import {requestsURL, requestResponseURL} from "../assets/URLs";
import swal from 'sweetalert'
const Requests = () => {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetchRequests();
    }, []);

    const token = localStorage.getItem('access-token')

    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    async function fetchRequests(){
        await axios.get(`${requestsURL}5d2d2f08-15f7-4ace-b421-3d8d75a2ae67`,config)
            .then((response) => {
                console.log(response.data);
                setRequests(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    async function requestResponse(patientid){
        await axios.get(`${requestResponseURL}5d2d2f08-15f7-4ace-b421-3d8d75a2ae67/${patientid}`,config)
            .then((response) => {
                let res = response.data;
                // swal({
                //     title: "Success",
                //     text: {res},
                //     icon: "success",
                //     button: "OK",
                // });
                swal("Success!", `${res}`, "success");

            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            {

                (requests?.length !== 0) ? (
                    requests.map((request, index) => (
                        <div key={index} className="col-12 col-md-11 row align-items-center justify-content-between p-2 mt-2" style={{backgroundColor:"#bfbebe", borderRadius:"10px"}}>
                            <div className="col-12 col-md-auto" style={{backgroundColor:"#bfbebe"}}>{request.firstName} {request.lastName}</div>
                            <div className="col-12 col-md-7 row justify-content-between" style={{backgroundColor:"#bfbebe"}}>
                                <div className="col-4 col-md-1 offset-md-1">Severity</div>
                                <div className="col-6 col-md-8">
                                    <ProgressBar variant="success" now={request.depressionSeverity}/>
                                </div>
                            </div>
                            <div className="col-6 col-md-1 offset-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm"
                                onClick={()=>{
                                    console.log("my patient id", request.id)
                                    requestResponse(request.id);
                                }}
                            >Accept</button></div>
                            <div className="col-6 col-md-1" style={{backgroundColor:"#bfbebe"}}><button type="button" className="btn btn-light btn-sm">Reject</button></div>
                        </div>
                    ))
                ) : (
                    <div>No Pending Requests</div>
                )
            }
        </>
    )
}

export default Requests;