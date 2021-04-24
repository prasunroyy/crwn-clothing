
import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom';

import HomePage from'./pages/homepage/homepage.component';
import ShopPage from'./pages/shop/shop.component';
import Header from'./components/header/header.component'
import  SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import{auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
          //console.log(snapshot.data());//got the id and values in this
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          }
          // ,()=>{
          //   console.log(this.state)
          // }
          )
          // console.log(this.state);
        });
        
      }
      else{
        this.setState({currentUser:userAuth});
      }


      
      //createUserProfileDocument(user);
      //this.setState({currentUser:user});

      //console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
