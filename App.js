import "./style/main.css"
import Auth from "./pages/auth"
import Admin from "./components/adminPanel"


function App({Component}) {
  return (
    <div className="bg-adv-color">
      <Auth />
    </div>
  );
}

export default App;
