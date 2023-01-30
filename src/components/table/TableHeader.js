import TableAction from "./TableAction";

const TableHeader = ({person, handleShowCreateClick}) => tbHeader(person, handleShowCreateClick);

const tbHeader = (person, handleShowCreateClick) => <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Title</th>
                  <th>Actions <TableAction person={person} handleClick={handleShowCreateClick} css="success" btnName="Create"/></th>
                 </tr>;


export default TableHeader;