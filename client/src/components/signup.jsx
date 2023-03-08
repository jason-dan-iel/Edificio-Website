import { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./formaction";
import Input from "./input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const naviage = useNavigate()

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {
    const configuration = {
      method: "post",
      url: "https://server-sigma-neon.vercel.app/api/user/register",
      data: signupState,
    };
    axios(configuration)
      .then((result) => {
        alert("Registered Successfully");
        naviage("/")
        console.log(result)
      })
      .catch((error) => {
        alert(error.error);
      });
  };

  return (
    <form className="mt-4 space-y-6 w-96" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
