import './App.css';
import Login from './components/login';
import SignUp from './components/signup';
import Popup from 'reactjs-popup';

function App() {
	return (
    	<div className="App">
    		<header className="App-header">
        	UCUddit
			</header>
        	<body className='App-body'>
				<div id="buttons">
					<Popup trigger={<button>Login</button>} modal nested>
            		    {
							close => (
            		            <div className='modal'>
            		                <div>
            		                    <button onClick={() => close()}>
            		                            X
            		                    </button>
            		                </div>
									<div className='content'>
					                    <Login />
            		                </div>
            		            </div>
            		        )
            		    }
            		</Popup>
        			<Popup trigger={<button>Sign Up</button>} modal nested>
            		    {
							close => (
								<div className='modal'>
            		                <div>
            		                    <button onClick={() => close()}>
            		                            X
            		                    </button>
            		                </div>
									<div className='content'>
            		                    <SignUp />
            		                </div>
            		            </div>
            		        )
            		    }
            		</Popup>
					
        		</div>
			</body>
	</div>
  );
}

export default App;
