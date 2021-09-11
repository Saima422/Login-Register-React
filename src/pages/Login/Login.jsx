import React, { useContext, useState } from 'react';
import styles from './Login.module.scss';
import { Link, Redirect, Route } from 'react-router-dom';
import LoginContext from '../../utils/LoginContext';

function Login(){

    const [token, setToken] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setLogin } = useContext(LoginContext);

    // const url = 'http://localhost:4000/users/login';
    const url = 'https://todo-backend-multi-user.herokuapp.com/users/login';

    const handleChange = (event) => {
        switch(event.target.name){
            case 'email':
                setEmail(event.target.value);
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            default:
                break;
        }
    }

    const loginUser = async (event) => {
        event.preventDefault();
        
        const reqObj = {
            email: email,
            password: password,
        }

        try{
            let resData = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reqObj),
            });
    
            resData = await resData.json();

            if(resData.data && resData.token){
                event.target.email.value = event.target.password.value = "";
                alert(resData.message);
                setToken(resData.token); 
                if(token){}
                setLogin(true);
                setRedirect(true);       
            }

        }catch(err){
            console.log(err);
            event.target.email.value = event.target.password.value = "";
            alert("User Cannot be Logged In. ");
        }
    }

    return <>

    <Route>
        {redirect ?
            <Redirect to='/home' />
            :
            <form className={styles.loginForm} onSubmit={loginUser}>
                <h1>LOGIN</h1>
                <label htmlFor="email">Email </label>
                <input id="email" type="email" name="email" onChange={handleChange} required/>

                <label htmlFor="password">Password </label>
                <input id="password" type="password" name="password" onChange={handleChange} required minLength="8" autoComplete="on"/>

                <button type="submit">LOGIN</button>

                <p>Don't have an account? <Link to="/register">REGISTER</Link></p>
            </form>
        }
    </Route> 
    </>
}

export default Login;