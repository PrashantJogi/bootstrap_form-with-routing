import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Auth() {
    const [value ,  setValue] = useState({name:"",email:"",password:""})

    const change = (e) =>{
        const {name ,  value} = e.target;

        setValue((prev)=>{
            return{...prev,[name]:value}
        })
    }

    const submit = (e) =>{
        e.preventDefault();
        console.log(value, "value");
        setValue({ name: "", email: "", password: "" });
        localStorage.setItem("authenticate",JSON.stringify("access"))
        // eslint-disable-next-line no-restricted-globals
        location.href="/Form"
    }
  return (
    <>
      <br />
      <h3>Registration Form</h3>
      <br />

      <br />
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={change}
            name="name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={change}
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={change}
            name="password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Auth;
