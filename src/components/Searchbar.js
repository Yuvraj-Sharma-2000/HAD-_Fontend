import {useState} from 'react'

import Card from 'react-bootstrap/Card';
import avatar from "../assets/avatar.png"
import {useSelector, useDispatch} from 'react-redux'
import {Navigate, Link} from 'react-router-dom'
import PatientDetais from '../pages/PatientDetails';
// import {deleteUser} from '../features/users/userReducer';

const SearchBar = () => {
    const [query, setQuery] = useState("")
    const patients = useSelector((state)=>state.users.value)
    const dispatch = useDispatch()

    return (
        <div>
            <input placeholder="Search Patient" onChange={event => setQuery(event.target.value)}
            className="my-3 border-light rounded w-25"
            />
            <div className="row m-3 align-items-center">
            {
              patients.filter(patient => {
                if (query === '') {
                  return patient;
                } else if (patient.first_name.toLowerCase().includes(query.toLowerCase())) {
                  return patient;
                }
                else if (patient.last_name.toLowerCase().includes(query.toLowerCase())) {
                  return patient;
                }
              }).map((patient) => (
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
                              {/* <button className='btn btn-secondary' onClick={()=>{
                                dispatch(deleteUser({id: patient.id}));
                              }}>Delete</button> */}
                              <Link to={`/patients/${patient.id}`}>
                                <button className='btn btn-secondary'>More</button>
                              </Link>
                          </div>
                      </div>
                  </Card>
            ))
            }
          </div>
        </div>
    );
}
 
export default SearchBar;