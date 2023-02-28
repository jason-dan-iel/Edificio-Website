import React from "react";
import { useState } from "react";

export default function Login(){

    const initialValues = {
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    }

    const [details, setDetails] = useState(initialValues)
    const storeValue = (event)=>{
        const {name, value} = event.target;
        setDetails({
            ...details,
            [name]: value
        })
    }

    return (
        <main>
            <h1>Create New Account</h1>
            <form action="">
                <input type="text" name="email" placeholder="Email"  onChange={storeValue} value={details.email}/>
                <input type="text" name="username" placeholder="Username" value={details.username}/>
                <input type="text" name="password" placeholder="Password" value={details.password}/>
                <input type="text" name="confirm-password" placeholder="Confirm Password" value={details.confirmPassword} />
            </form>
        </main>
    )
}