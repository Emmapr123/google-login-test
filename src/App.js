import { useState } from 'react';
import './App.css';
import { LoginButton, LogoutButton } from './components';

function App() {
  const [login, setLogin] = useState(false)

  return (
    <div className="App">
      {!login ? <LoginButton setLogin={setLogin}/> : 
      <LogoutButton login={login} setLogin={setLogin}/>}
    </div>
  );
}

export default App;
