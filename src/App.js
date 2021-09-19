import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import DataGrid  from './components/DataGrid';
import Navbar from './components/Navbar';
import ReservationForm from './components/ReservationForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
      <Switch>
      <Route exact path="/">
      <DataGrid/>
      </Route>
      <Route exact path="/reservationForm">
      <ReservationForm/>
      </Route>
    </Switch>
     </div>
    </div>
    </Router>

  );
}

export default App;
