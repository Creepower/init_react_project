import React, { useState } from 'react'
import '../common.css'
import { initialUsers } from '../../assets/data/data'


export const Login = () => {

    // variables
<<<<<<< HEAD
    const [usernameField, setUsernameField] = useState("");
    const [passwordField, setPasswordField] = useState("");
=======
    /*const [signInValue,setSignInValue] =useState({
        username:"",
        password:""
    })*/
    
    const [username,setUsername] =useState("")
    const [password,setPassword]=useState("")
>>>>>>> a24c087afd9f0f552600d371a072b86d6edaadd9

    // errors variable
    const [error, setError] = useState({
        type: "",
        message: ""
    })

    // const [usernameError, setUsernameError] = useState("")
    // const [passwordError, setPasswordError] = useState("")


    // functions
    const handleSubmit = () => {
<<<<<<< HEAD
=======
        console.log("Username:", username);
        console.log("Password:", password);
>>>>>>> a24c087afd9f0f552600d371a072b86d6edaadd9

        var userExists = false;

        if (usernameField === "") {
            setError({
                ...error,
                type: "username",
                message: "username Empty"

            })
            return;
        } else if (passwordField === "") {
            setError({
                ...error,
                type: "password",
                message: "Password Empty"
            })
            return
        }

        setError({
            ...error,
            type: "",
            password: ""
        })

        for (const i in initialUsers) {
            if (initialUsers[i].username === usernameField) {
                userExists = true

                if (initialUsers[i].username === usernameField && initialUsers[i].password === passwordField) {

                    console.log("Login Success!")
                    return

                } else {
                    // setError("incorrect password!")
                    return;
                }

                // {}

            }
        }

<<<<<<< HEAD
        if (userExists === false) {
            console.log("user does not exist")
=======
        if (!userExists) {
            setError({
                ...error,
                type: "totalError",
                message: "User does not exist!"
            })
>>>>>>> a24c087afd9f0f552600d371a072b86d6edaadd9
            return;
        }



        // initialUsers.forEach(item => {
        //     if (username === item.username) {
        //         console.log(item)
        //         console.log("success")
        //         return
        //     } else {
        //         console.log("user not Found!")
        //     }
        // })

    }


    return (
        // <div className="main">
        <div className="login_form">
            <h2 className="header">Login</h2>

            {/* <!-- username input --> */}
            <div className="input username ">
                <label>Username/email</label>


                <input type="text" className={error.message !== "" ? error.type === "username" && "error_border" : ""} placeholder="Username" value={usernameField} name="username" onChange={(e) => setUsernameField(e.target.value)} />
                {(error.message !== "" && error.type === "username") && < >
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>
                    <span className="error_color ">{error.message}</span>
                </>}

            </div>

            {/* <!-- password input --> */}
            <div className="input password">
                <label >password</label>
                <input type="password" className={error.message !== "" ? error.type === "password" && "error_border" : ""} placeholder="password" name="password" value={passwordField} onChange={(e) => setPasswordField(e.target.value)} />

                {(error.message !== "" && error.type === "password") && < >
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>
                    <span className="error_color ">{error.message}</span>
                </>}

            </div>

            {/* <!-- remember me --> */}
            <div className="remember_me">
                <input type="checkbox" />

                <span>&nbsp;Remember me</span>
            </div>

<<<<<<< HEAD
=======
            {(error.message !== "" && error.type === "totalError") && < >
                <span className="input error_text">{error.message}</span> 
            </>}      
>>>>>>> a24c087afd9f0f552600d371a072b86d6edaadd9
            {/* <!-- button submit --> */}
            <div className="button">
                <button onClick={handleSubmit}>Submit</button>
            </div>

            {/* <!-- signup link --> */}
            <div className="signup_link">
                <span>Have no account?</span>

                <a href="/signup">&nbsp; Click here to signup</a>
            </div>
        </div>
        //  {/* </div > */ }
    )
}

