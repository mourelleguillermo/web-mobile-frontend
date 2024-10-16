import './App.css';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Profile from './components/profile';

const user = [
	{
		username: 'root',
		password: 'admin',
	},
	{
		username: 'test',
		password: 'test',
	},
]
function App() {
	return (
    	<div className="App">
    		<header className="App-header">
        	UCUddit
			<div id="buttons">
					<LoginButton />
        			<LogoutButton />
        		</div>
			</header>
        	<body className='App-body'>
				<Profile />
			</body>
	</div>
  );
}

export default App;
