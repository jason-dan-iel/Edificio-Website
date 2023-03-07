import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./formaction";
import FormExtra from "./formextra";
import Input from "./input";
import axios from "axios";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    const configuration = {
      method: "post",
      url: "https://edificio-website.vercel.app/api/user/login",
      data: loginState,
    };

    axios(configuration)
      .then((result) => {
        alert("logged in successfully");
        setLoginState(true);
      })
      .catch((error) => {
        alert(error.error);
      });
      {loginState ? (
        <p className="text-success">You Are Logged in Successfully</p>
      ) : (
        <p className="text-danger">You Are Not Logged in</p>
      )}
  };

  return (
    <form className="mt-4 space-y-6 w-96" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
