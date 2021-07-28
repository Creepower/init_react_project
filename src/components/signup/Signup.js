import React, { useState } from 'react'
import '../common.css'

export const Signup = () => {

    // variables
    const [username, setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmation,confirmPassword] = useState("");

    // error variables
    const [error, setError] = useState({
        type: "",
        message: ""
    })

    //success variable
    const [success, setSuccess] = useState({
        type: ""
    })
 

    

    const handleSubmit = () => {
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm password:", confirmation)

        if(username === ""){
            setError({
                ...error,
                type:"username",
                message: "Field required"
            })
            return
        }
        else if(email === ""){
            setError({
                ...error,
                type: "email",
                message: "Field required"
            })
            return
        }
        else if(password === ""){
            setError({
                ...error,
                type: "password",
                message: "Field required"
            })
            return
        }
        else if(confirmation === ""){
            setError({
                ...error,
                type:"missing",
                message: "Field required"
            })
            return
        }
        else{
            setError({
                ...error,
                type:"",
                message: ""
            })
        }



       //password mismatch
        if(password === confirmation){
            setSuccess({
                ...success,
                type:"confirm"
            })   
        }
        else{
            setError({
                ...error,
                type:"confirm",
                message:"Please confirm your password!"
                
            })
        }
                
    }


    return (
        <div className="login_form">
            <h2 className="header">Create account</h2>

            {/*<!-- username input -->*/}
            <div className="input username">
                <label>username</label>

                <input className={error.message !=="" ? error.type === "username" && "error_border": success.type === "confirm" && "success_border"} type="text" placeholder="Username" value={username} name="username" onChange={(e)=> setUsername(e.target.value)}/>

                {(error.message !== "" && error.type === "username") && < >
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>
                    <span className="error_color">{error.message}</span>
                </>}

                {success.type === "confirm" && < >
                   <i className="success_color fa fa-check-circle-o" aria-hidden="true"></i>
                </>}

            </div>

            {/*<!-- email input -->*/}
            <div className="input email">
                <label>email</label>

                <input className={error.message !=="" ? error.type === "email" && "error_border": success.type === "confirm" && "success_border"} type="email" placeholder="email@email.com" value={email} name="email" onChange={(e)=> setEmail(e.target.value)}/>

                {(error.message !== "" && error.type === "email") && < >
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>
                    <span className="error_color">{error.message}</span>
                </>}

                {success.type === "confirm" && < >
                   <i className="success_color fa fa-check-circle-o" aria-hidden="true"></i>
                </>}

            </div>

            {/*<!-- password input -->*/}
            <div className="input password">

                <label>password</label>

                <input className={error.message !=="" ? error.type === "password" && "error_border": success.type === "confirm" && "success_border"} type="password" placeholder="password"value={password} name="passsword" onChange={(e)=> setPassword(e.target.value)}/>
                
                {(error.message !== "" && error.type === "password") && < >
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>
                    <span className="error_color">{error.message}</span>
                </>}

                {success.type === "confirm" && < >
                   <i className="success_color fa fa-check-circle-o" aria-hidden="true"></i>
                </>}

            </div>

            {/*<!-- confirm password input -->*/}
            <div className="input password">
                <label>confirm password</label>

                <input className={error.message !=="" ? error.type === "missing" && "error_border": success.type === "confirm" && "success_border"} type="password" placeholder="confirm password" value={confirmation} name="confirm password" onChange={(e)=> confirmPassword(e.target.value)}/>

                {(error.message !=="" && error.type === "missing") && < >
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>
                    <span className="error_color">{error.message}</span>
                </>}
                {(error.message !=="" && error.type === "confirm") && < >
                    <span className="input error_text">{error.message}</span> 
                </>}


                {success.type === "confirm" && < >
                   <i className="success_color fa fa-check-circle-o" aria-hidden="true"></i>
                </>}


            </div>

            {/*<!-- button submit -->*/}
            <div className="button">
                <button onClick={handleSubmit}>Submit</button>
            </div>

            {/*<!-- signup link -->*/}
            <div className="signup_link">
                <span>Already have an account?</span>

                <a href="/">Click here to signin</a>
            </div>
        </div>
    )
    
}