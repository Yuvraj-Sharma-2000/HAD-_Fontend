import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

// import avatar from "../assets/avatar.png"
import SearchBar from '../components/Searchbar';


const Patients = () => {
    return (
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
    </div>
  )
}
 
export default Patients;