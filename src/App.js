// import "./style/main.css"
import Auth from "./pages/auth";
// import Admin from "./components/adminPanel"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth0ProviderWithHistory from './auth0provider';
import React from "react";
import Meeting from './components/meeting_pop_up'
import "./style/main.css"

function App({ Component }) {
  return (
    // <div class="bg-adv-color">
    //   <ul>
    //     {/* <li><a href="/Admin">Admin</a></li> */}
    //     <li>
    //       <a href="/Auth">Auth</a>
    //     </li>
    //     <li>
    //       <a href="/Huinea">Huinea</a>
    //     </li>
    //   </ul>
    //   <BrowserRouter>
    //     <Auth0ProviderWithHistory>
    //       <Switch>
    //         {/* <Route path="/Admin">
    //         <Admin />
    //       </Route> */}
    //         <Route path="/Auth">
              
    //         </Route>
    //         <Route path="/Huinea"></Route>
    //       </Switch>
    //     </Auth0ProviderWithHistory>
    //   </BrowserRouter>
    // </div>
    <div>
    <a class="dark-bg button"  href="#popup1" >+ add meeting </a>
    <Meeting /> 
    </div>
  );
}

export default App;
