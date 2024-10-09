function Login() {
    return (
        <div>
            <h1 style={{color: '#c00'}}>Login</h1>
                <p>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </p>
                <p>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </p>
                <p>
                    <button type="submit">Login</button>
                </p>
            </div>
    )
};

export default Login;