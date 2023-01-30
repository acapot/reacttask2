const TableAction = ({css, btnName, handleClick, person}) => {return(
                                                            btnName === "Create" 
                                                            ?
                                                            <button key={"b1-create"} type="button" className={`me-1 btn btn-${css}`} onClick={handleClick}>{btnName}</button>
                                                            :
                                                            <button key={"b1-"+person.id} type="button" className={`me-1 btn btn-${css}`} onClick={() => handleClick(person.id)}>{btnName}</button>)}


export default TableAction;