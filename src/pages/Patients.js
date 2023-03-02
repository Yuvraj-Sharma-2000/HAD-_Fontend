// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

// import avatar from "../assets/avatar.png"
import SearchBar from '../components/Searchbar';
import axios from 'axios'
import {useEffect} from 'react'
import {allPatientsURL} from '../assets/URLs'

// import {addUser} from '../features/users/userReducer';
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import {updateUserState} from '../features/users/userReducer'

const Patients = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const patients = useSelector((state)=>state.users.value)

    useEffect(() => {
        fetchPatients();
    }, []);

    const token = localStorage.getItem('access-token')

    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    async function fetchPatients(){
        await axios.get(`${allPatientsURL}5d2d2f08-15f7-4ace-b421-3d8d75a2ae67`,config)
        .then((response) => {
            console.log(response.data);
            dispatch(
                updateUserState(response.data)
            )
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <Sidebar>
        <div className='container-fluid' style={{overflow:"auto", height:"80%"}}>
            <div className='m-3'>
                <SearchBar />
            </div>
            {/* <div className="row m-3 align-items-center">
                {
                    patients.map((patient) => (
                        <Card border="light" className="col-3 p-3 my-2" key={patient.id}>
                            <Card.Header>
                                <div className='avatar rounded-circle'>
                                    <img alt="image" src={avatar} style={{objectFit:"contain", width:"25%"}}/>
                                </div>
                                <div className=''>
                                    <Card.Title>{patient.first_name} {patient.last_name}</Card.Title>
                                    <Card.Text>Patient ID: {patient.id}</Card.Text>
                                </div>
                            </Card.Header>
                            <div className='my-2'>
                                <div style={{backgroundColor:"#d8d8d9"}} className="p-2">
                                    <i>More details here</i>
                                    <Card.Text>
                                        mail: {patient.email} <br/>
                                        gender: {patient.gender}
                                    </Card.Text>
                                    <button className='btn btn-secondary'>More</button>
                                </div>
                            </div>
                        </Card>
                    ))
                }
        </div> */}
        {/* testing redux add user */}
        {/* <input type="text" placeholder='add user name' onChange={(event) => {
            setName(event.target.value);
        }} />
        <button onClick={() => {
            dispatch(
                addUser({id: patients[patients.length - 1].id + 1,first_name: 'K', last_name:name ,email:'rohit.apex1999@gmail.com', gender:'Male'})
            )
        }}>Add user</button> */}
    </div>
    </Sidebar>
  )
}
 
export default Patients;