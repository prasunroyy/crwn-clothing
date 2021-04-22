
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from'./pages/homepage/homepage.component';
import ShopPage from'./pages/shop/shop.component';
import Header from'./components/header/header.component'



function App() {
  return (
    //switch will only match the exact path and will not render anything else
    <div className="App">
    <Header/>
    <Switch>
    
      <Route exact={true} path='/' component ={HomePage}/>
      <Route exact={true} path='/shop' component ={ShopPage}/>
    </Switch>
      
      </div>
      
      // <Route exact={true} path='/topics/:topicId' component ={TopicDetail}/>
  );
}

export default App;
