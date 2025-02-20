import { useState } from "react"
import axios from 'axios'


const Register = () => {
    const [name, setName] = useState("Nishant")
    const [email, setEmail] = useState("nishant@email.com")
    const [password, setPassword] = useState("1234")

    let handleSubmit = async (e) => {
        // form handler...
        e.preventDefault();
        // console.table({name, email, password})              // we're gonna make it async. function(from below)
        const {data} = await axios.post('http://localhost:8000/api/register', {name, email, password})      // OR {'userName' : name, "userEmail" : email, "password" : password}
        console.log("REGISTER RESPONSE", data)
    }

    return (
        <>
            <h1 className="jumbotron bg-primary text-center square pt-4 pb-4"> Register </h1>
            {/* <p>Register page</p> */}

            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <label className="mt-5" name="userName">User name</label>
                    <input className="form-control mb-4 " type="text" name="userName" value={name } onChange={(e) => setName(e.target.value)} required></input>

                    <label name="userEmail">E-mail</label>
                    <input className="form-control mb-4 " type="email" name="userEmail" value={email} onChange={(e) => setEmail(e.target.value) } required />

                    <label name="userPassword">Password</label>
                    <input className="form-control mb-4 " type="password" name="userPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <button className="btn btn-block btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
 
}

export default Register