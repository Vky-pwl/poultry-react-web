import React from 'react';
import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Navigation from './components/navigation/navigation.component';
// import { auth } from './firebase/firebase.util';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  wrapper = React.createRef();

  handleScroll = () => {
    if ((window.scrollY + window.innerHeight) > this.wrapper.current.offsetHeight) {
      document.body.classList.add('compact');
    } else {
      document.body.classList.remove('compact');
    }
  };

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    //   this.setState({ currentUser: user });
    // });
    window.addEventListener('scroll', this.handleScroll, true);
  }
  componentWillUnmount() {
    // this.unsubscribeFromAuth();
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className='container'>
        <Navigation />
        <div className='wrapper' ref={this.wrapper}>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact={true} path='/' component={HomePage} />
            <Route path='/signin' component={SignInAndSignUp} />
          </Switch>
        </div>
        <Footer currentUser={this.state.currentUser} />
      </div>
    )
  }

}

export default App;
