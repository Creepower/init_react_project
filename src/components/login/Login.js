import React, { useState } from 'react'
import '../common.css'
import { initialUsers } from '../../assets/data/data'


export const Login = () => {

    // variables
    const [usernameField, setUsernameField] = useState("");
    const [passwordField, setPasswordField] = useState("");

    // errors variable
    const [error, setError] = useState({
        type: "",
        message: ""
    })

    // const [usernameError, setUsernameError] = useState("")
    // const [passwordError, setPasswordError] = useState("")


    // functions
    const handleSubmit = () => {

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

        if (userExists === false) {
            console.log("user does not exist")
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
        <div className="login_form " style={{ backgroundColor: "#c1c1c1" }}>
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

            {/* <!-- button submit --> */}
            <div className="button">
                <button onClick={handleSubmit}>Submit</button>
            </div>

            {/* <!-- signup link --> */}
            <div className="signup_link">
                <span>Have no account?</span>

                <a href="/">&nbsp; Click here to signup</a>
            </div>
        </div>
        //  {/* </div > */ }
    )
}

