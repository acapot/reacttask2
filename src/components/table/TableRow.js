import TableAction from "./TableAction";
import { Link } from "react-router-dom"

const TableRow = ({person, handleEditClick, handleDetailsClick, handleDeleteClick} ) => {
  return (<tr><td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>{person.title}</td>
              <td>
                {/*<TableAction person={person} handleClick={handleDetailsClick} css="primary" btnName="Details"/>*/}
                <Link className={`me-1 btn btn-primary`} to={`/details/${person.id}`}>Details</Link>
                <TableAction person={person} handleClick={handleEditClick}  css="warning" btnName="Edit"/>
                <TableAction person={person} handleClick={handleDeleteClick} css="danger" btnName="Delete"/> 
              </td>
          </tr>);
}

export default TableRow;