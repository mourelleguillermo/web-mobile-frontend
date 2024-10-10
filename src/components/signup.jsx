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
                <label htmlFor="password" id="passlabel">Password: </label> {/* TODO: make a toggle for password visibility */}
                <input type="password" id="password" name="password" />
            </p>
            <p>
                <label htmlFor="confirmPassword" id="confirmlabel">Confirm Password: </label> {/* TODO: also password visibility */}
                <input type="password" id="confirmPassword" name="confirmPassword" />
            </p>
            <p>
                <button type="submit" id="submitbutton" onClick={() => {
                    if (document.getElementById('password').value !== document.getElementById('confirmPassword').value) {
                        alert('Passwords do not match')
                    }
                    else if (document.getElementById('password').value.length < 8 || document.getElementById('password').value.length > 16) {
                        alert('Password must be between 8 and 16 characters')
                    }
                    else {
                        alert('Sign up successful')
                    }
                }}>Sign Up</button>
            </p>
        </div>
    );
}

export default SignUp;