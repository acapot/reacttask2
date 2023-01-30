//import TableAction from "./TableAction";
import React, { useState } from "react";
//import { useHistory } from 'react-router-dom';
import PeopleService from "../services/PeopleService";
import { useForm } from "react-hook-form";
import { useEffect } from "react";


const CreatePerson = ({changeShowCreate, handleShowCreateClick, handleReload}) => {
  
    //let history = useHistory();

    const { register, formState: { errors }, reset, handleSubmit, formState:{isDirty, isSubmitSuccessful} } = useForm({
      defaultValues: {
        id: null,
        firstname: "",
        lastname: "",
        email: "",
        title: ""
        }
    });

    const onSubmit = (data) => {
        console.log(data);
        saveTutorial(data);
    }

    useEffect(() => {
      if(isSubmitSuccessful){
        reset({
          id: null,
        firstname: "",
        lastname: "",
        email: "",
        title: ""
        })
      }
    },[isSubmitSuccessful,reset]);

    const handleCloseClick = () => changeShowCreate();

    /*const initialPersonState = {
      id: null,
      firstname: "",
      lastname: "",
      email: "",
      title: ""
      
    };
    const [person, setPerson] = useState(initialPersonState);
   

    const handleInputChange = event => {
      const { name, value } = event.target;
      setPerson({ ...person, [name]: value });
    };*/

    const [submitted, setSubmitted] = useState(false);

    const saveTutorial = (data) => {
      /* data = {
        firstname: person.firstname,
        lastname: person.lastname,
        email: person.email,
        title: person.title,        
      };*/
  
      PeopleService.create(data)
        .then(response => {
          /*setPerson({
            id: response.data.id,
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            email: response.data.email,
            title: response.data.title,
            published: response.data.published
          });*/
          //setSubmitted(true);

          handleReload();
          //window.location.reload(history.push("/crud"));
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
  /*
    const newPerson = () => {
      setPerson(initialPersonState);
      setSubmitted(false);
    };*/

  return(
    <div  className="submit-form">
      <h2>Formulario</h2>
      <button type="button" className={`me-1 btn btn-success`} onClick={handleCloseClick}>Close</button>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <label>First Name</label>
              <input className="form-control" type="text" {...register('firstname', {
                  required: true,
                  maxLength: 80,
                  minLength: 2
              })} />
              {errors.firstname?.type === 'required' && <p>This field is required</p>}
              {errors.firstname?.type === 'maxLength' && <p>This field must have maximun 80 characters</p>}
              {errors.firstname?.type === 'minLength' && <p>This field must at least 2 characters</p>}
          </div>
          <div>
              <label>Last Name</label>
              <input className="form-control" type="text" {...register('lastname', {
                  required: true,
                  maxLength: 10,
                  minLength: 2
              })} />
              {errors.lastname?.type === 'required' && <p>This field is required</p>}
              {errors.lastname?.type === 'maxLength' && <p>This field must have maximun 80 characters</p>}
              {errors.lastname?.type === 'minLength' && <p>This field must at least 2 characters</p>}
          </div>
          
          <div>
              <label>Email</label>
              <input className="form-control" type="text" {...register('email', {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  required: true,
                  maxLength: 120,
                  minLength: 5
              })} />
              {errors.email?.type === 'required' && <p>This field is required</p>}
              {errors.email?.type === 'maxLength' && <p>This field must have maximun 120 characters</p>}
              {errors.email?.type === 'minLength' && <p>This field must at least 5 characters</p>}
              {errors.email?.type === 'pattern' && <p>The email is not incorrecto</p>}              
          </div>
          <div>
              <label>Title</label>
              <input className="form-control" type="text" {...register('title', {
                  required: true
              })} />
              {errors.title?.type === 'required' && <p>This field is required</p>}
          </div>
          {/*<div>
              <label>Edad</label>
              <input type="text" {...register('edad', {
                  validate: edadValidator
              })} />
              {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
            </div>
        <div>
            <label>País</label>
            <select {...register('pais')}>
                <option value="es">España</option>
                <option value="it">Italia</option>
                <option value="fr">Francia</option>
            </select>
        </div>
        <div>
            <label>¿Incluir teléfono?</label>
            <input type="checkbox" {...register('incluirTelefono')} />
        </div>
        {incluirTelefono && (
            <div>
                <label>Teléfono</label>
                <input type="text" {...register('telefono')} />
            </div>
        )}*/}
        <input type="submit" value="Enviar" />
    </form>
</div>
    /*
    <div className="submit-form">
      <button type="button" className={`me-1 btn btn-success`} onClick={handleCloseClick}>Close</button>
        <br/>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPerson}>
            Add+
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              required
              value={person.firstname}
              onChange={handleInputChange}
              name="firstname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              required
              value={person.lastname}
              onChange={handleInputChange}
              name="lastname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              value={person.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={person.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>  */
  )
}

export default CreatePerson;