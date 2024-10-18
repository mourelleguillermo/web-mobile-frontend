function Login() {
    return (
        <div>
            <h1 style={{color: '#000'}} id="title">Login</h1>
                <p>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username" />
                </p>
                <p>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" />
                </p>
                <p>
                    <button type="submit" onClick={() => {
                        console.log(document.getElementById('username').value, document.getElementById('password').value)
                    }}>Login</button>
                </p>
            </div>
    )
};

export default Login;