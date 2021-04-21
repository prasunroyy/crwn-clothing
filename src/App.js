
import './App.css';
import HomePage from'./pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = ()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
const TopicDetail = ()=>(
  <div>
    <h1>TOPIC DETAIL PAGE</h1>
  </div>
);


function App() {
  return (
    //switch will only match the exact path and will not render anything else
    <div className="App">
    <Switch>
    
      <Route exact={true} path='/' component ={HomePage}/>
      <Route exact={true} path='/hats' component ={HatsPage}/>
      <Route exact={true} path='/topics/:topicId' component ={TopicDetail}/>
    </Switch>
    
    </div>
    
  );
}

export default App;
