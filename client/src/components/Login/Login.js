import React, { useState } from "react";;

async function loginUser(credentials) {
    return fetch('http://localhost:3306/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      
   }

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    

    const handleSubmit = async e => {
        e.preventDefault();
        const res =  await loginUser({
            'username' : email,
            'password': pass,
        }).then(data => {
            if (data.ok=== true)
                props.onFormSwitch('home')
            return data;})

        return res;
      }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <br/>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <br/>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}
