import avatar from "../assets/avatar.png"
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <>
            {/* <div className="row justify-content-end" style={{backgroundColor:"#d8d9d8", margin:"0px 5px", minHeight:"10%"}}> */}
            <div className="d-flex justify-content-end" style={{backgroundColor:"#d8d9d8", margin:"0px 5px", minHeight:"10%"}}>
                {/* This is the header
                <div className="col">

                </div> */}
                {/* <div className="col row">
                    <div className="doctor-name col">
                        <div className="text-end">Doctor Name</div>
                    </div>
                    <div className='col avatar rounded-circle'>
                        <img alt="image" src={avatar} style={{objectFit:"contain", width:"25%"}}/>
                    </div>
                </div> */}
                <div className="p-2 d-flex justify-content-end align-items-center">
                    <h5 className="text-center px-2">Doctor's Name</h5>
                    <Link to={`/profile`}>
                        <img className="" alt="image" src={avatar} style={{objectFit:"contain", width:"25%"}}/>
                    </Link>
                </div>
            </div>
        </>
    );
}
 
export default Header;