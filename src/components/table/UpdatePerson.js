import React, { useState } from "react";
import PeopleService from "../services/PeopleService";

const UpdatePerson = ({person, changeShowUpdate, handleReload}) => {
  
 
  const [currentPerson, setCurrentPerson] = useState(person);
  const handleCloseClick = () => changeShowUpdate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    
    setCurrentPerson({ ...currentPerson, [name]: value });
    //console.log(JSON.stringify(currentPerson))
  };

  const updatePerson = event => {
    event.preventDefault();
    PeopleService.update(currentPerson)
      .then(response => {
        setCurrentPerson({...currentPerson});
        handleReload();
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return(
    /*<div className= "bg-dark d-flex justify-content-center text-white-50 py-5" >
      <div className= "text-start">
        <button type="button" className={`me-1 btn btn-primary`} onClick={handleCloseClick}>Close</button>
        <div><h2>Details</h2></div>
        <div><b>id:</b> {person.id}</div>
        <div><b>First Name:</b> {person.firstName}</div>
        <div><b>Last Name:</b> {person.lastName}</div>
        <div><b>Email:</b> {person.email}</div>
        <div><b>Title:</b> {person.title}</div>
      </div>
    </div>*/

    <div>
      <div className="edit-form">
      <button type="button" className={`me-1 btn btn-success`} onClick={handleCloseClick}>Close</button>
        <br/>
        <h4>Update Person</h4>
        <form onSubmit={updatePerson}>
        <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={currentPerson.firstName}
                onChange={handleInputChange}
              />
          </div>
          <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={currentPerson.lastName}
                onChange={handleInputChange}
              />
          </div>
          <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={currentPerson.email}
                onChange={handleInputChange}
              />
          </div>
          <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentPerson.title}
                onChange={handleInputChange}
              />
          </div>
          
          <button
            type="submit"
            //className="badge badge-success"
            className="me-1 btn btn-primary"
          >
            Update
          </button>
        </form>
      </div>
    </div>

  )
}

export default UpdatePerson;
