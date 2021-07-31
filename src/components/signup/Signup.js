import React, { useState } from 'react'
<<<<<<< HEAD
import '../common.css';
// import { initialUsers } from '../../assets/data/data';
=======
import '../common.css'
>>>>>>> a24c087afd9f0f552600d371a072b86d6edaadd9

export const Signup = () => {
    const [signupValues, setSignupValues] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [confirmPassword, setConfirmPassword] = useState("")

    // error variable
    const [error, setError] = useState({
        type: "",
        message: ""
    })

    // submit function

    // reset state back to empty
    const resetError = () => {
        setError({
            type: "",
            message: ""
        })
    }
    // submit form function
    const handleSubmit = () => {
        if (signupValues.username === "") {
            setError({
                ...error,
                type: "username",
                message: "Username required"
            })
            return
        } else if (signupValues.email === "") {
            setError({
                ...error,
                type: "email",
                message: "email required!"
            })
            return
        } else if (signupValues.password === "") {
            setError({
                ...error,
                type: "password",
                message: "password required!"
            })
            return
        }
        else if (confirmPassword === "") {
            setError({
                ...error,
                type: "confirmPassword",
                message: "Please Confirm Password!"
            })
            return
            // resetState()
        } else {
            resetError()
        }

        // db errors:
        if (confirmPassword !== signupValues.password) {
            setError({
                ...error,
                type: "error",
                message: "passwords do not match!"
            })
        } else {
            setError({
                ...error,
                type: "success",
                // message: "Please Confirm Password!"
            })
        }

    }

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
<<<<<<< HEAD
            <h2 className="header">Create-account</h2>

            {/* <!-- username input --> */}
            <div className="input username">
                <label>username</label>

                <input type="text" className={error.message !== "" ? error.type === "username" && "error_border" : ""} value={signupValues.username} onChange={(e) => setSignupValues({ ...signupValues, username: e.target.value })} placeholder="Username" />

                {(error.type === "username" && error.message !== "") && <>
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>

                    <span className="error_color">{error.message}</span>
                </>}
            </div>

            {/* <!-- email input --> */}
            <div className="input email">
                <label>email</label>

                <input type="email" className={error.message !== "" ? error.type === "email" && "error_border" : ""} value={signupValues.email} onChange={(e) => setSignupValues({ ...signupValues, email: e.target.value })} placeholder="email@email.com" />

                {(error.type === "email" && error.message !== "") && <>
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>

                    <span className="error_color">{error.message}</span>
=======
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
>>>>>>> a24c087afd9f0f552600d371a072b86d6edaadd9
                </>}

            </div>

<<<<<<< HEAD
            {/* <!-- password input --> */}
            <div className="input password">

                <label>password</label>

                <input type="password" className={error.message !== "" ? error.type === "password" && "error_border" : ""} value={signupValues.password} onChange={(e) => setSignupValues({ ...signupValues, password: e.target.value })} placeholder="password" />

                {(error.type === "password" && error.message !== "") && <>
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>
=======
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
>>>>>>> a24c087afd9f0f552600d371a072b86d6edaadd9

                    <span className="error_color">{error.message}</span>
                </>}
            </div>

<<<<<<< HEAD
            {/* <!-- confirm password input --> */}
            <div className="input password">
                <label>confirm password</label>

                <input type="password" className={error.message !== "" ? error.type === "confirmPassword" && "error_border" : ""} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirm password" />
=======
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

>>>>>>> a24c087afd9f0f552600d371a072b86d6edaadd9

                {(error.type === "confirmPassword" && error.message !== "") && <>
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>

                    <span className="error_color">{error.message}</span>
                </>}
            </div>

<<<<<<< HEAD
            {/* general errors: */}
            {error.type === "error" && error.message !== "" ?
                <div className="error">
                    {error.message}
                </div>
                :
                error.type === "success" &&
                <div className="success">
                    Signup Success!
                </div>
            }
            {/* <!-- button submit --> */}
=======
            {/*<!-- button submit -->*/}
>>>>>>> a24c087afd9f0f552600d371a072b86d6edaadd9
            <div className="button">
                <button onClick={handleSubmit}>Submit</button>
            </div>

<<<<<<< HEAD
            {/* <!-- signup link --> */}
=======
            {/*<!-- signup link -->*/}
>>>>>>> a24c087afd9f0f552600d371a072b86d6edaadd9
            <div className="signup_link">
                <span>Already have an account?</span>

                <a href="/">Click here to signin</a>
            </div>
        </div>
    )
}


