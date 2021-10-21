
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import UserDashboard from './pages/UserDashboard';
import './style/calendar.css';



function App() {
  return (
    <div className="App">
      {/* <UserDashboard /> */}
      <Calendar view="day" className="main_calendar" tileClassName="tile_date"/>

    </div>
  );
}

export default App;
