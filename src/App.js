import 'react-calendar/dist/Calendar.css';
import "./style/calendar.css"
import Auth from "./pages/auth"
import Calendar from "./pages/calendar"
import Signin from "./pages/sign_in"
import Signup from "./pages/sign_up"
import TurnoverPopUp from "./pages/turnoverPopUp"
import TrainingPopUp from './pages/trainingPopUp';
import Meeting from './pages/meetingPopUp';


function App({Component}) {
  
  return (
    <>
      {/* <Auth /> */}
      <TrainingPopUp />
      {/* <Meeting /> */}
      {/* <Calendar /> */}
    </>
  );
}

export default App;
