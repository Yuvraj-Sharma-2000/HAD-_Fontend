import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert'
import {useNavigate} from 'react-router-dom'

import baseurl from '../assets/URLs';

function LoginComponent(){

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    // const [isloading,setIsLoading] = useState(false);
    var res=0;

    const enabled = username.length>0 && pwd.length>0;

    let config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": '*',
          }
        }

    const handleLogin = async(event) => {
        event.preventDefault();
        // setIsLoading(true);

        // await axios.post(`${baseurl}login`, {
        //     username: username,
        //     password: pwd
        // }, config)
        // .then((response) => {
        //     console.log(response);
        //     res = response.status;
        //     navigate('/dashboard');
        // })
        // .catch((error) => {
        //     console.log(error);
        //     //if error is caught then show the alert popup
        //     // swal({
        //     //     title: "Invalid Credentials",
        //     //     text: "Please check your username or password!!",
        //     //     icon: "error",
        //     //     button: "Try Again",
        //     //   });
        // })
        

        fetch(`${baseurl}login`, {
     
        // Adding method type
        method: "POST",
         
        // Adding body or contents to send
        body: JSON.stringify({
            username: username,
            password: pwd
        }),
         
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
        }
    })
     
    // Converting to JSON
    .then(response => response.json())
     
    // Displaying results to console
    .then(json => console.log(json));
    }

    return (
            <>
                <section className="vh-100 gradient-form" style={{backgroundColor: "#eee"}}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                <div className="card-body p-md-5 mx-md-4">

                                    <div className="text-center">

                                    <form className='mt-3 py-3'>
                                    <p>Please login to your account</p>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="username" className="form-control"
                                        placeholder="UserName" 
                                        value={username}
                                        onChange={event => setUsername(event.target.value)}
                                        required
                                        />
                                        <label className="form-label" htmlFor="email">Username</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="password" className="form-control"
                                        placeholder="Your Password" 
                                        value={pwd}
                                        onChange={event => setPwd(event.target.value)}
                                        required
                                        />
                                        <label className="form-label" htmlFor="password">Password</label>
                                    </div>

                                    <div className="text-center pt-1 mb-5 pb-1">
                                        <button 
                                            className="btn btn-dark btn-block fa-lg gradient-custom-2 mb-3" type="button"
                                            onClick={handleLogin}
                                            disabled={!enabled}
                                            >
                                            Login
                                        </button>
                                    </div>
                                    </form>

                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </>
    );
}


export default LoginComponent;