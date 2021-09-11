import React, { useState } from 'react';
import styles from './Register.module.scss';
import { Link } from "react-router-dom";
import { Redirect, Route } from 'react-router';

function Register(){
    const [redirect, setRedirect] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const url = 'http://localhost:4000/users/register';
    const url = 'https://todo-backend-multi-user.herokuapp.com/users/register';


    const handleChange = (event) => {
        switch(event.target.name){
            case 'firstname':
                setFirstname(event.target.value);
                break;
            case 'lastname':
                setLastname(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            case 'confirmPassword':
                setConfirmPassword(event.target.value);
                break;
            default:
                break;
        }
    }

    const registerUser = async (event) => {
        event.preventDefault();
        
        const reqObj = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }

        try{
            let resData = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reqObj),
            });
    
            resData = await resData.json();

            if(resData && resData.data){
                event.target.firstname.value =
                event.target.lastname.value =
                event.target.email.value =
                event.target.password.value = 
                event.target.confirmPassword.value = "";
                alert("User Created Successfully");
                setRedirect(true);
            }
            else{
                event.target.firstname.value =
                event.target.lastname.value =
                event.target.email.value =
                event.target.password.value = 
                event.target.confirmPassword.value = "";
                alert("User Could not be created");
                setRedirect(false);
            }
            
        }catch(err){
            console.log(err);
            event.target.firstname.value =
            event.target.lastname.value =
            event.target.email.value =
            event.target.password.value = 
            event.target.confirmPassword.value = "";
            alert("User Could not be Created. Try Again!!");
        }
    }

    return <>
    <Route>
        { redirect ?
            <Redirect to="/login" />
            :
            <form className={styles.registerForm} onSubmit={registerUser}>
                <h1>REGISTER</h1>
                <label htmlFor="firstname">First Name </label>
                <input id="firstname" type="text" name="firstname" onChange={handleChange} required/>

                <label htmlFor="lastname">Last Name </label>
                <input id="lastname" type="text" name="lastname" onChange={handleChange}required/>

                <label htmlFor="email">Email </label>
                <input id="email" type="email" name="email" onChange={handleChange} required/>

                <label htmlFor="password">Password </label>
                <input id="password" type="password" name="password" onChange={handleChange} autoComplete="on" required minLength="8"/>

                <label htmlFor="confirmPassword">Confirm Password </label>
                <input id="confirmPassword" type="password" name="confirmPassword" onChange={handleChange} autoComplete="on" required minLength="8"/>

                <button type="submit">REGISTER</button>

                <p>Already Registered? <Link to="/login">LOGIN</Link></p>
            </form>
        }
    </Route> 
    </>
}

export default Register;