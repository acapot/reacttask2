import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import PeopleService from "../services/PeopleService";



//const ShowPersonDetails = ({person, changeShowDetails}) => {
const ShowPersonDetails = () => {

  const { id }= useParams();
  let history = useHistory();

  const initialPersonState = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    title: ""
  };

  const [currentPerson, setCurrentPerson] = useState(initialPersonState);
  //const [message, setMessage] = useState("");

  const getPerson = id => {
    PeopleService.get(id)
      .then(response => {
        setCurrentPerson(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getPerson(id);
  }, [id]);

  //const handleCloseClick = () => changeShowDetails();
  
  const handleBackClick = () => history.push("/crud");

  return(
    <div className= "bg-dark d-flex justify-content-center text-white-50 py-5" >
      <div className= "text-start">
        
        <div><h2>Details</h2></div>
        <div><b>id:</b> {currentPerson.id}</div>
        <div><b>First Name:</b> {currentPerson.firstName}</div>
        <div><b>Last Name:</b> {currentPerson.lastName}</div>
        <div><b>Title:</b> {currentPerson.title}</div>
        <button type="button" className={`me-1 btn btn-success`} onClick={handleBackClick}>Back</button>
      </div>
    </div>
  )
}

export default ShowPersonDetails;