import React from 'react';

import {authService} from "fbase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import WritePage from "./components/views/WritePage/WritePage";
import PostPage from './components/views/PostPage/PostPage';


import './App.scss';

function App() {
  const style = {
    height: "100%",
    width: "100%"
  }
  const [init, setInit] = React.useState(false);
  const [isLoggedIn,setIsLoggedIn] = React.useState(false);
  React.useEffect(()=>{
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  },[]);
  return (
    <Router>
      {/* {init ? <AppRouter isLoggedIn={isLoggedIn}/>:"Init"} */}
      <div style={style}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/write" component={WritePage} />
          <Route exact path="/post" component={PostPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
