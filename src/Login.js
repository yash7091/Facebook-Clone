import { Button } from '@material-ui/core'
import React,{useState} from 'react'
import "./Login.css"
import {auth,provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';

function Login() {
    const [state,dispatch] = useStateValue();

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type:actionType.SET_USER,
                user:result.user,
            });


        })
        .catch(error=>alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/220px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
                <img className="login__text" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}> Sign In</Button>

        </div>
    )
}

export default Login
