import avatar from "../assets/avatar.png"
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        // <>
        //     {/* <div className="row justify-content-end" style={{backgroundColor:"#d8d9d8", margin:"0px 5px", minHeight:"10%"}}> */}
        //     <div className="d-flex justify-content-end" style={{backgroundColor:"#d8d9d8", margin:"0px 5px", minHeight:"10%"}}>
        //         {/* This is the header
        //         <div className="col">

        //         </div> */}
        //         {/* <div className="col row">
        //             <div className="doctor-name col">
        //                 <div className="text-end">Doctor Name</div>
        //             </div>
        //             <div className='col avatar rounded-circle'>
        //                 <img alt="image" src={avatar} style={{objectFit:"contain", width:"25%"}}/>
        //             </div>
        //         </div> */}
        //         <div className="p-2 d-flex justify-content-end align-items-center">
        //             <h5 className="text-center px-2">Doctor's Name</h5>
        //             <Link to={`/profile`} className="">
        //                 <img className="" alt="image" src={avatar} style={{objectFit:"contain", width:"25%"}}/>
        //             </Link>
        //         </div>
        //     </div>
        // </>
        <>
            <nav class="navbar navbar-expand-lg navbar-light my-navbar mx-2 rounded">
                <div className="container justify-content-end">
                <div className="navbar-brand" href="#">
                    Doctor's Name{' '}
                    <Link to={`/profile`} className="">
                        <img
                        alt="doctor profile image"
                        src={avatar}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        />
                    </Link>
                </div>
                </div>
            </nav>
        </>
    );
}
 
export default Header;