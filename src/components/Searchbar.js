import {useState} from 'react'

import Card from 'react-bootstrap/Card';
import avatar from "../assets/avatar.png"
import Patients from '../pages/Patients';

const patients = [{
    "id": 1,
    "first_name": "Eugen",
    "last_name": "Giamelli",
    "email": "egiamelli0@facebook.com",
    "gender": "Male"
  }, {
    "id": 2,
    "first_name": "Ezequiel",
    "last_name": "Cruess",
    "email": "ecruess1@booking.com",
    "gender": "Male"
  }, {
    "id": 3,
    "first_name": "Sofie",
    "last_name": "Woodburn",
    "email": "swoodburn2@state.tx.us",
    "gender": "Genderfluid"
  }, {
    "id": 4,
    "first_name": "Doll",
    "last_name": "Domelow",
    "email": "ddomelow3@hatena.ne.jp",
    "gender": "Female"
  }, {
    "id": 5,
    "first_name": "Robbie",
    "last_name": "Hof",
    "email": "rhof4@google.co.jp",
    "gender": "Female"
  }, {
    "id": 6,
    "first_name": "Gage",
    "last_name": "Somerville",
    "email": "gsomerville5@sourceforge.net",
    "gender": "Male"
  }, {
    "id": 7,
    "first_name": "Sayers",
    "last_name": "Keunemann",
    "email": "skeunemann6@prlog.org",
    "gender": "Male"
  }, {
    "id": 8,
    "first_name": "Sorcha",
    "last_name": "Sighart",
    "email": "ssighart7@hud.gov",
    "gender": "Polygender"
  }, {
    "id": 9,
    "first_name": "Madison",
    "last_name": "Ramsbottom",
    "email": "mramsbottom8@yahoo.co.jp",
    "gender": "Male"
  }, {
    "id": 10,
    "first_name": "Marisa",
    "last_name": "Towl",
    "email": "mtowl9@smugmug.com",
    "gender": "Female"
  }, {
    "id": 11,
    "first_name": "Janeczka",
    "last_name": "Pratte",
    "email": "jprattea@tinyurl.com",
    "gender": "Female"
  }, {
    "id": 12,
    "first_name": "Elston",
    "last_name": "Seamark",
    "email": "eseamarkb@who.int",
    "gender": "Non-binary"
  }, {
    "id": 13,
    "first_name": "Pooh",
    "last_name": "Walczak",
    "email": "pwalczakc@bizjournals.com",
    "gender": "Male"
  }, {
    "id": 14,
    "first_name": "Ruben",
    "last_name": "Bimrose",
    "email": "rbimrosed@slideshare.net",
    "gender": "Male"
  }, {
    "id": 15,
    "first_name": "Reine",
    "last_name": "Senecaut",
    "email": "rsenecaute@e-recht24.de",
    "gender": "Female"
  }, {
    "id": 16,
    "first_name": "Lyn",
    "last_name": "Dubs",
    "email": "ldubsf@stanford.edu",
    "gender": "Female"
  }, {
    "id": 17,
    "first_name": "Pepita",
    "last_name": "O'Meara",
    "email": "pomearag@amazon.de",
    "gender": "Non-binary"
  }, {
    "id": 18,
    "first_name": "Elayne",
    "last_name": "Gothrup",
    "email": "egothruph@bluehost.com",
    "gender": "Female"
  }, {
    "id": 19,
    "first_name": "Heinrik",
    "last_name": "Markie",
    "email": "hmarkiei@aboutads.info",
    "gender": "Genderqueer"
  }, {
    "id": 20,
    "first_name": "Gregorio",
    "last_name": "Rogerot",
    "email": "grogerotj@seesaa.net",
    "gender": "Male"
  }];

const SearchBar = () => {
    const [query, setQuery] = useState("")

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
                              <button className='btn btn-secondary'>More</button>
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