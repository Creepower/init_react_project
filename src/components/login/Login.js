import React, { useState } from 'react'
import '../common.css'
import { initialUsers } from '../../assets/data/Data'


export const Login = () => {

    // variables
    /*const [signInValue,setSignInValue] =useState({
        username:"",
        password:""
    })*/
    
    const [username,setUsername] =useState("")
    const [password,setPassword]=useState("")

    // errors variable
    const [error, setError] = useState({
        type: "",
        message: ""
    })

    //success variable
    const [success, setSuccess] = useState({
        type: ""
    })

    

    // const [usernameError, setUsernameError] = useState("")
    // const [passwordError, setPasswordError] = useState("")


    // functions
    const handleSubmit = () => {
        console.log("Username:", username);
        console.log("Password:", password);


        if(username === ""){
            setError({
                ...error,
                type:"username",
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
        else{
            setError({
                ...error,
                type:"",
                message: ""
            })
        }





        var userExists = false;

        for (const i in initialUsers) {
            if (initialUsers[i].username === username) {
                userExists = true

                if (initialUsers[i].username === username && initialUsers[i].password === password) {

                    setSuccess ({
                        ...success,
                        type: "success"
                    })
                    return

                } else {
                    setError({
                        ...error,
                        type: "password",
                        message: "Incorrect password"
                    })
                }

                // {}

            }
        }

        if (!userExists) {
            setError({
                ...error,
                type: "totalError",
                message: "User does not exist!"
            })
            return;
        }

    }


    return (
        <div className="login_form">
            <h2 className="header">Login</h2>

            {/* <!-- username input --> */}
            <div className="input username ">
                <label>Username/email</label>


                <input type="text" className={error.message !== "" ? error.type === "username" && "error_border" : success.type === "success" && "success_border"} placeholder="Username" value={username} name="username" onChange={(e) => setUsername(e.target.value)} />
                {(error.message !== "" && error.type === "username") && < >
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>
                    <span className="error_color ">{error.message}</span>
                </>}

                {(success.type === "success" && < > 
                    <i className="success_color fa fa-check-circle-o" aria-hidden="true"></i>
                </>)}

            </div>

            {/* <!-- password input --> */}
            <div className="input password">
                <label >password</label>

                <input type="password" className={error.message !== "" ? error.type === "password" && "error_border" : success.type === "success" && "success_border"} placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                {(error.message !== "" && error.type === "password") && < >
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>
                    <span className="error_color ">{error.message}</span>
                </>}

                {(success.type === "success" && < > 
                    <i className="success_color fa fa-check-circle-o" aria-hidden="true"></i>
                </>)}

            </div>

            {/* <!-- remember me --> */}
            <div className="remember_me">
                <input type="checkbox" />

                <span>&nbsp;Remember me</span>
            </div>

            {(error.message !== "" && error.type === "totalError") && < >
                <span className="input error_text">{error.message}</span> 
            </>}      
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
        // </div >
    )
}

