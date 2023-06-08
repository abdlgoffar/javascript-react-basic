import { useState } from "react";
import Input from "./Input";
import Label from "./Label";




const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    return (
        <>
            <p>username: {username || "nothing value"}</p>
            <p>email: {email || "nothing value"}</p>
            <Label htmlFor={"username"} text={"username:"}/>
            <Input value={username} onChange={(event) => setUsername(event.target.value)} type={"text"} id={"username"} name={"username"}/>
            <br/>
            <Label htmlFor={"email"} text={"email:"}/>
            <Input value={email} onChange={(event) => setEmail(event.target.value)} type={"text"} id={"email"} name={"email"}/>
            <br/>
            <button>Register</button>
        </>    
    )
}
export default Register;