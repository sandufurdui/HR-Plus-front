import "./style/main.css"
import Auth from "./pages/auth"
import Admin from "./components/adminPanel"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App({Component}) {
  return (
      <div class="bg-adv-color">
        
        <ul>
          <li><a href="/Admin">Admin</a></li>
          <li><a href="/Auth">Auth</a></li>
          <li><a href="/Huinea">Huinea</a></li>
        </ul>
        <BrowserRouter>
        <Switch>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/Auth">
            <Auth />
          </Route>
          <Route path="/Huinea">
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
