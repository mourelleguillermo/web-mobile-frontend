function SignUp() {
    return (
        <div>
            <h1 style={{ color: '#c00' }}>Sign Up</h1>
            <p>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
            </p>
            <p>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </p>
            <p>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" />
            </p>
            <p>
                <button type="submit">Sign Up</button>
            </p>
        </div>
    );
}

export default SignUp;