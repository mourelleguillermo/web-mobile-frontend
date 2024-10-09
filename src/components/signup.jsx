function SignUp() {
    return (
        <div>
            <h1 style={{ color: '#000' }} id="title">Sign Up</h1>

            {/* TODO: check email before sign up
            if in use tell user
            if not, continue to sign up */}

            <p>
                <label htmlFor="username" id="userlabel">Username: </label>
                <input type="text" id="username" name="username" />
            </p>
            <p>
                <label htmlFor="email" id="emaillabel">Email: </label>
                <input type="email" id="email" name="email" />
            </p>
            <p>
                <label htmlFor="password" id="passlabel">Password: </label>
                <input type="password" id="password" name="password" />
            </p>
            <p>
                <label htmlFor="confirmPassword" id="confirmlabel">Confirm Password: </label>
                <input type="password" id="confirmPassword" name="confirmPassword" />
            </p>
            <p>
                <button type="submit" id="submitbutton">Sign Up</button>
            </p>
        </div>
    );
}

export default SignUp;