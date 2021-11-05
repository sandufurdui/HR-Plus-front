import 'react-calendar/dist/Calendar.css';
import "./style/calendar.css"
import Auth from "./pages/auth"
import Calendar from "./pages/calendar"
import Signin from "./pages/sign_in"
import Signup from "./pages/sign_up"
import TurnoverPopUp from "./pages/turnoverPopUp"



function App({Component}) {
  
  return (
    <>
      {/* <Auth /> */}
      <TurnoverPopUp />
      {/* <Calendar /> */}
    </>
  );
}

export default App;
