export const Signup = () => {

    return (
        <div class="login_form">
            <h2 class="header">Create account</h2>

            {/*<!-- username input -->*/}
            <div class="input username">
                <label>username</label>

                <input type="text" placeholder="Username" />

                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>

                <span class="error">error messages</span>
            </div>

            {/*<!-- email input -->*/}
            <div class="input email">
                <label>email</label>

                <input type="email" placeholder="email@email.com" />

                <i class="fa fa-check-circle-o" aria-hidden="true"></i>

            </div>

            {/*<!-- password input -->*/}
            <div class="input password">

                <label for="">password</label>

                <input type="password" placeholder="password"/>

            </div>

            {/*<!-- confirm password input -->*/}
            <div class="input password">
                <label for="">confirm password</label>

                <input type="password" placeholder="confirm password" />

            </div>

            {/*<!-- button submit -->*/}
            <div class="button">
                <button>Submit</button>
            </div>

            {/*<!-- signup link -->*/}
            <div class="signup_link">
                <span>Already have an account?</span>

                <a href="/">Click here to signin</a>
            </div>
        </div>
    )
    
}