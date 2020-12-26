import React from 'react';
import {
  connect
} from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import AuthRoute from './Auth/AuthRouter';

import LandingPage from "./components/views/LandingPage/LandingPage";
import WritePage from "./components/views/WritePage/WritePage";
import PostPage from './components/views/PostPage/PostPage';
import MyPage from './components/views/MyPage/MyPage';
import UserPage from './components/views/UserPage/UserPage';
import ListPage from './components/views/AimPage/pages/ListPage'
import BoardPage from './components/views/AimPage/pages/BoardPage'
import LoginPage from './components/views/login/login';
import SignUpPage from './components/views/SignUp/SignUp';

import './App.scss';
import StudyMeetingPage from 'components/views/StudyMeetingPage/StudyMeetingPage';
import StudyPostContainer from './components/views/StudyPostPage/StudyPostContainer';
import StudyWriteContainer from './components/views/StudyWritePage/StudyWriteContainer';

import Header from './components/views/Header/Header'
import './components/views/Container/Container.scss';
import Footer from 'components/views/Footer/Footer';

import MarkdownContainer from 'components/views/MarkdownContainer/MarkdownContainer';

function App() {
  const style = {
    height: "100%",
    width: "100%"
  }
  // React.useEffect(()=>{
  //   authService.onAuthStateChanged((user) => {
  //     if(user){
  //       setIsLoggedIn(true);
  //     }else{
  //       setIsLoggedIn(false);
  //     }
  //     setInit(true);
  //   });
  // },[]);
  return (
    <div>
      <Router>
        <Header/>
        <Container fluid>
          <Row>
            <Col style={{ minHeight: 'calc(100vh - 8rem)', padding: '0' }}>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <AuthRoute exact path="/write" component={WritePage} />
                <Route exact path="/post" component={PostPage} />
                {/* <Route exact path="/mypage" component={MyPage} /> */}
                <Route path="/post/:doc" component={PostPage} />
                <Route path="/study/post" component={StudyPostContainer} />
                <Route path="/study" component={StudyMeetingPage} />
                <Route path="/users/:username" component={UserPage} />
                <AuthRoute exact path="/mypage" component={MyPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/aim" component={BoardPage} />
                <Route exact path="/signUp" component={SignUpPage} />
                <Route exact path="/board/:id" component={ListPage} />
              </Switch>
            </Col>
          </Row>
          {/* {init ? <AppRouter isLoggedIn={isLoggedIn}/>:"Init"} */}
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// const mapStateToProps = state => ({
//   isAuthenticated: state.login.isAuthenticated
// });

// const mapDispatchToProps = dispatch => ({
//   onLogoutUser: () => dispatch(logoutUser())
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
