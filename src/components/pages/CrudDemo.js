import React, { useState, useEffect } from "react";
import TableHeader from "../table/TableHeader";
import TableRow from "../table/TableRow";
//import persons from "./data.json";
import CreatePerson from "../table/CreatePerson";
import UpdatePerson from "../table/UpdatePerson";
import PeopleService from "../services/PeopleService"

const CrudDemo = () => {

  const initialPerson = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    title: ""
  };
  const [peopleList, setPeopleList] = useState([]);
  const [reload, setReload] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [personToShow, setPersonToShow] = useState(initialPerson);
  

  useEffect(() => {
   
    retrievePeople();
    setReload(false);
  }, [reload]);

 

  const retrievePeople = () => {
    PeopleService.getAll()
      .then(response => {
        setPeopleList(response.data);
        console.log("getAll1");
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

const handleEditClick = (personId) => { 
  console.log("handleEditClick");
  setShowCreate(false);
  setShowUpdate(true);
  console.log(personId);
  setPersonToShow(peopleList.filter(({id})=>id === personId));

};

const handleDeleteClick = id => {
  PeopleService.remove(id)
    .then(response => {
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });

    console.log("delete");
    setReload(true);

};


const handleShowCreateClick = () => { 
  console.log("handleShowCreateClick");
  setShowCreate(true);
  setShowUpdate(false);

};

const handleReload = () => { 

  setReload(true);

};

const changeShowCreate = () => setShowCreate(!showCreate);
const changeShowUpdate = () => setShowUpdate(!showUpdate);

const rows = peopleList.map((person,i)=> <TableRow key={"tr"+i} person={person} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>);

//const compDetails = showDetails && <ShowPersonDetails person={personToShow[0]} changeShowDetails={changeShowDetails}/>;
const compCreate = showCreate && <CreatePerson changeShowCreate={changeShowCreate} handleReload={handleReload}/>;
const compUpdate = showUpdate && <UpdatePerson person={personToShow[0]} changeShowUpdate={changeShowUpdate} handleReload={handleReload}/>;

const table = <>
                <table className="table table-striped table-dark">
                  <thead>
                    <TableHeader  handleShowCreateClick={handleShowCreateClick}/>
                  </thead>
                  <tbody>
                    {rows}               
                  </tbody>
                </table>
                {/*{compDetails}*/}
                {compCreate}
                {compUpdate}
              </>;

  return (table);
};

export default CrudDemo
