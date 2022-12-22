/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";


function User() {
  window.addEventListener("storage", () => {
    if (!localStorage.getItem("authenticate")) {
      // eslint-disable-next-line no-restricted-globals
      location.href = "/";
    }
  });
  if (
    localStorage.getItem("authenticate") === "" ||
    !localStorage.getItem("authenticate")
  ) {
    console.log("click");
    // eslint-disable-next-line no-restricted-globals
    location.href = "/";
  }
  const [data, setData] = useState([]);
  let show = "";
  
  let temp = [];

  window.addEventListener("storage", myFunction);

  function myFunction(event) {
      check();
  }


  let dlt = (id) => {
    temp = data.filter((el) => el.id !== id);
    localStorage.setItem("userValue", JSON.stringify(temp));
       check();
  };

  let update = (val) => {
    localStorage.setItem("forEdit", JSON.stringify(val));
    location.href = "/Form";
  };
  
  useEffect(() => {
    check();

    
    return ()=>{
      window.removeEventListener("storage", myFunction);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.parse(localStorage.getItem("userValue")) !== data]);

 

  const check = () =>{
    
    if(JSON.parse(localStorage.getItem("userValue"))!== data){
      
        setData(JSON.parse(localStorage.getItem("userValue")));
    }
  }
  
  show = (<>

    <button onClick={()=>{localStorage.removeItem("authenticate")
    location.href="/"}}>log out</button>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody id="myTable">
        {data &&
          data.map((e, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>
                  <button onClick={() => update(e)}>Update</button>
                  <button onClick={() => dlt(e.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  </>
  );

  return <>{show}</>;
}

export default User;
