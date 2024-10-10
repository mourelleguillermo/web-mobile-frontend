import './App.css';
import Login from './components/login';
import SignUp from './components/signup';
import Popup from 'reactjs-popup';


function App() {
	return (
    	<div className="App">
    		<header className="App-header">
        	UCUddit
			<div id="buttons">
					<Popup trigger={<button id='loginbutton'>Login</button>} modal nested>
            		    {
							close => (
            		            <div className='modal'>
            		                <div>
            		                    <button onClick={() => close()}>X</button>
										<div className='content'>
					                    	<Login />
            		                	</div>
            		                </div>
            		            </div>
            		        )
            		    }
            		</Popup>
        			<Popup trigger={<button id='signupbutton'>Sign Up</button>} modal nested>
            		    {
							close => (
								<div className='modal'>
            		                <div>
            		                    <button onClick={() => close()}>X</button>
										<div className='content'>
            		                    	<SignUp />
            		                	</div>
            		                </div>
            		            </div>
            		        )
            		    }
            		</Popup>
        		</div>
			</header>
        	<body className='App-body'>
				ewewweweewwewew
			</body>
	</div>
  );
}

export default App;
