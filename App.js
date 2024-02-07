
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ExpenseTracker from './components/ExpenseTracker';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/sign' element={<SignUp/>} />
        <Route path='/home' element={<ExpenseTracker/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
