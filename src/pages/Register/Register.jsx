import React, { useState } from 'react';
import styles from './Register.module.scss';
import { Link } from "react-router-dom";
import { Redirect, Route } from 'react-router';

function Register(){
    const [redirect, setRedirect] = useState(false);

    // const url = 'http://localhost:4000/users/register';
    const url = 'https://todo-backend-multi-user.herokuapp.com/users/register';

    const registerUser = async (event) => {
        event.preventDefault();
        
        const reqObj = {
            firstname: event.target.form.firstname.value,
            lastname: event.target.form.lastname.value,
            email: event.target.form.email.value,
            password: event.target.form.password.value,
            confirmPassword: event.target.form.confirmPassword.value,
        }

        try{
            let resData = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reqObj),
            });
    
            resData = await resData.json();
            console.log(resData);

            if(resData && resData.data){
                event.target.form.firstname.value =
                event.target.form.lastname.value =
                event.target.form.email.value =
                event.target.form.password.value = 
                event.target.form.confirmPassword.value = "";
                alert("User Created Successfully");
                setRedirect(true);
            }
            else{
                event.target.form.firstname.value =
                event.target.form.lastname.value =
                event.target.form.email.value =
                event.target.form.password.value = 
                event.target.form.confirmPassword.value = "";
                alert("User Could not be created");
                setRedirect(false);
            }
            
        }catch(err){
            console.log(err);
            event.target.form.firstname.value =
            event.target.form.lastname.value =
            event.target.form.email.value =
            event.target.form.password.value = 
            event.target.form.confirmPassword.value = "";
            alert("User Could not be Created. Try Again!!");
        }
    }

    return <>
    <Route>
        { redirect ?
            <Redirect to="/login" />
            :
            <form className={styles.registerForm}>
                <h1>REGISTER</h1>
                <label htmlFor="firstname">First Name </label>
                <input id="firstname" type="text" />

                <label htmlFor="lastname">Last Name </label>
                <input id="lastname" type="text" />

                <label htmlFor="email">Email </label>
                <input id="email" type="email" />

                <label htmlFor="password">Password </label>
                <input id="password" type="password" />

                <label htmlFor="confirmPassword">Confirm Password </label>
                <input id="confirmPassword" type="password" />

                <button onClick={registerUser}>REGISTER</button>

                <p>Already Registered? <Link to="/login">LOGIN</Link></p>
            </form>
        }
    </Route> 
    </>
}

export default Register;