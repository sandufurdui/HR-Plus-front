import logo from './logo.svg';
import './App.css';
import Signin from './components/signin';
import Calendar from "./pages/calendar"
import Signup from "./pages/signup"



function App() {
  return (
    <div className="App">
      <Signin />
      <Signup />
      <Calendar />

    </div>
  );
}

export default App;
