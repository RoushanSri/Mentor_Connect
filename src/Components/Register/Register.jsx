import React from "react";
import css from './Register.module.css';
import { Link } from "react-router-dom";

function Register(){
    return(
        <div className={css.container}>
        <div className={css.wrapper}>
    <div className={css.IMG}>
</div>
        <div className={css.log}>
            <h1>SignUp</h1>
            <form>
            <div className={css.input_box}>
                <input type="text" placeholder="Name" required/>
            </div>
            <div className={css.input_box}>
                <input type="email" placeholder="Email Address" required/>
            </div>
            <div className={css.input_box}>
                <input type="password" placeholder="Password" required/>
            </div>
            <div className={css.select}>
                <p className={css.label}>I am a :</p>
                <select>
                    <option>---select your role---</option>
                    <option>Mentor</option>
                    <option>Mentee</option>
                </select>
            </div>
            <button type="submit" className={css.btn}>SignUp</button>
            <div className={css.register_link}>
                <p>Already have an account? 
                    <Link to={"/login"}> Sign In</Link>
                </p>
            </div>
        </form>
    </div>
    </div>
    </div>
    )
}

export default Register;