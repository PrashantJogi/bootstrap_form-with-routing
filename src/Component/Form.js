import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuid } from "uuid";

function App() {

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
    location.href="/"
  }
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState({
    nameError: "",
    phoneError: "",
    emailError:"",
  });
  let editValue = "";
  useEffect(() => {
    handleEditvalue();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("forEdit")]);

  const handleEditvalue = () => {
    if (localStorage.getItem("forEdit")) {
      editValue = JSON.parse(localStorage.getItem("forEdit"));

      setUserInput(editValue);
    }
  };

  const change = (e) => {
    const { name, value } = e.target;

    if (localStorage.getItem("forEdit")) {
      setUserInput((prev) => {
        return { ...prev, [name]: value };
      });
    } else {
      setUserInput((prev) => {
        return { ...prev, [name]: value, id: uuid() };
      });
    }
    
  };

  const checkValidation = (value) =>{
    let nameError = ""
    let phoneError = ""
    let emailError = ""

    const {name , email , phone} = userInput  ;    
        const regexString = new RegExp(/^\S[a-zA-Z\s]+$/);
           if (regexString.test(name) === false || name === "") {
             nameError = "Please enter valid name";
           }
           
        const regexNumber = new RegExp(/^[1-9]\d{9}/)
           if(regexNumber.test(phone)===false || phone===""){
           phoneError= "Please enter valid Phone Number" 
           }
           
         const regexEmail = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");  
           if (regexEmail.test(email)===false || email==="") {
            emailError= "Please enter valid email id"
           }
           
           
           if(nameError || emailError || phoneError){
            setError({ nameError, emailError, phoneError });
            return false
           }
           return true
  }
  const Submit = (e) => {
    e.preventDefault();
    // debugger
    let allValue = JSON.parse(localStorage.getItem("userValue"))
      ? JSON.parse(localStorage.getItem("userValue"))
      : [];
    if (checkValidation()){

      if (localStorage.getItem("forEdit")) {
        for (let i = 0; i < allValue.length; i++) {
          if (allValue[i].id === userInput.id) {
            allValue.splice(allValue.indexOf(allValue[i]), 1, userInput);
          }
        }
        localStorage.removeItem("forEdit");
        localStorage.setItem("userValue", JSON.stringify(allValue));

      } else  {
        allValue.push(userInput);

        localStorage.setItem("userValue", JSON.stringify(allValue));
      }
      alert("Submited")
      setUserInput({
        name: "",
        email: "",
        phone: "",
      });
      setError({
    nameError: "",
    phoneError: "",
    emailError:"",
  })
    }
    
    
   
  };

  

  return (
    <>
    <h2>Fill user values</h2>
      <Form onSubmit={Submit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            contentEditable={true}
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={change}
            value={userInput.name}
          />
        </Form.Group>
        <h6 style={{ color: "red" }}>{error.nameError}</h6>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            contentEditable={true}
            type="email"
            name="email"
            placeholder="Enter email"
            value={userInput.email}
            onChange={change}
          />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <h6 style={{ color: "red" }}>{error.emailError}</h6>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMobile">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            contentEditable={true}
            type="phone"
            name="phone"
            placeholder="Enter phone number"
            value={userInput.phone}
            onChange={change}
          />
          <h6 style={{ color: "red" }}>{error.phoneError}</h6>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        
      </Form>
    </>
  );
}

export default App;
