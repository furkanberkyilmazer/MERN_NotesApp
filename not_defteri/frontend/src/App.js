import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

import Home from './pages/Home';
import Navbar  from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';

import { useAuthContext } from './hooks/useAuthContext';

function App() {

  const {kullanici}=useAuthContext();

  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <div className='pages'>
      <Routes>
        <Route path="/" element={kullanici ? <Home/>:<Navigate to="/login"/>}></Route>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/login" element={!kullanici?<Login/>:<Navigate to="/"/>}></Route>
        <Route path="/signup" element={!kullanici?<Signup/>:<Navigate to="/"/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
