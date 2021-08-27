import Navbar from './Components/Navbar/Navbar'
import { Dashboard } from './Components/Dashboard/Dashboard'
import { Prediction } from './Components/Prediction/Prediction'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Dashboard} />
      <Route path="/email" exact component={Prediction}/>
    </Router>
  );
}

export default App;
