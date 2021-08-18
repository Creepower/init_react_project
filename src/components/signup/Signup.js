import React, { useState } from 'react'
import '../common.css';
// import { initialUsers } from '../../assets/data/data';

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

    return (
        <div className="login_form " style={{ background: "#c7c7c7" }}>
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
                </>}

            </div>

            {/* <!-- password input --> */}
            <div className="input password">

                <label>password</label>

                <input type="password" className={error.message !== "" ? error.type === "password" && "error_border" : ""} value={signupValues.password} onChange={(e) => setSignupValues({ ...signupValues, password: e.target.value })} placeholder="password" />

                {(error.type === "password" && error.message !== "") && <>
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>

                    <span className="error_color">{error.message}</span>
                </>}
            </div>

            {/* <!-- confirm password input --> */}
            <div className="input password">
                <label>confirm password</label>

                <input type="password" className={error.message !== "" ? error.type === "confirmPassword" && "error_border" : ""} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirm password" />

                {(error.type === "confirmPassword" && error.message !== "") && <>
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>

                    <span className="error_color">{error.message}</span>
                </>}
            </div>

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
            <div className="button">
                <button onClick={handleSubmit}>Submit</button>
            </div>

            {/* <!-- signup link --> */}
            <div className="signup_link">
                <span>Already have an account?</span>

                <a href="/">Click here to signin</a>
            </div>
        </div>
    )
}


