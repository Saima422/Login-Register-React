import React, { useContext, useState } from 'react';
import styles from './Login.module.scss';
import { Link, Redirect, Route } from 'react-router-dom';
import LoginContext from '../../utils/LoginContext';

function Login(){

    const [token, setToken] = useState("");
    const [redirect, setRedirect] = useState(false);
    const { setLogin } = useContext(LoginContext);

    // const url = 'http://localhost:4000/users/login';
    const url = 'https://todo-backend-multi-user.herokuapp.com/users/login';

    const loginUser = async (event) => {
        event.preventDefault();
        
        const reqObj = {
            email: event.target.form.email.value,
            password: event.target.form.password.value,
        }

        try{
            let resData = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reqObj),
            });
    
            resData = await resData.json();
            console.log(resData);

            if(resData.data && resData.token){
                event.target.form.email.value = 
                event.target.form.password.value = "";
                alert(resData.message);
                setToken(resData.token); 
                setLogin(true);
                setRedirect(true);       
            }

        }catch(err){
            console.log(err);
            event.target.form.email.value = 
            event.target.form.password.value = "";
            alert("User Cannot be Logged In. ");
        }
    }

    return <>

    <Route>
        {redirect ?
            <Redirect to='/home' />
            :
            <form className={styles.loginForm}>
                <h1>LOGIN</h1>
                <label htmlFor="email">Email </label>
                <input id="email" type="email"/>

                <label htmlFor="password">Password </label>
                <input id="password" type="password"/>

                <button onClick={loginUser}>LOGIN</button>

                <p>Don't have an account? <Link to="/register">REGISTER</Link></p>
            </form>
        }
    </Route> 
    </>
}

export default Login;