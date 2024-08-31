import React from "react";
import css from './Login.module.css';
import {Link, useNavigate} from 'react-router-dom'

function Login(){

    const navigate =useNavigate()

    const handlesubmit = (e)=>{
        e.preventDefault();
        navigate("/")
    }

    return(
        <div className={css.container}>
        <div className={css.wrapper}>
        <div className={css.log}>
            <h1>Login</h1>
            <form onSubmit={handlesubmit}>
            <div className={css.input_box}>
                <input type="text" placeholder="Username" required/>
            </div>
            <div className={css.input_box}>
                <input type="password" placeholder="password" required/>
            </div>
            <div className={css.remember_forgot}>
                <label><input type="checkbox"/> Remember me</label>
                <Link to={""}>Forgot password?</Link>
            </div>
            <button type="submit" className={css.btn}>Login</button>
            <div className={css.register_link}>
                <p>Don't have an account? 
                    <Link to={"/register"}> Register</Link>
                </p>
            </div>
        </form>
    </div>
    <div className={css.IMG}>
</div>
    </div>
    </div>
    )
}

export default Login;