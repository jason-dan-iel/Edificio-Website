import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./formaction";
import FormExtra from "./formextra";
import Input from "./input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const navigate = useNavigate();

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
      url: "https://server-sigma-neon.vercel.app/api/user/login",
      // url : "http://localhost:3000/api/user/login",
      data: loginState,
    };

    axios(configuration)
      .then((result) => {
        alert("logged in successfully");
        localStorage.setItem("Token", result.data.token);
        navigate("/");
        location.reload();

      })
      .catch((error) => {
        console.log(error)
        alert(error.error);
      });
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
