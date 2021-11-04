import 'react-calendar/dist/Calendar.css';
import "./style/calendar.css"
import Auth from "./pages/auth"
import Calendar from "./pages/calendar"



function App({Component}) {
  return (
    <>
      <Auth />
      <Calendar />
    </>
  );
}

export default App;
