
import './App.css';
import Ticket from './components/Ticket';
import {
  BrowserRouter as Router,
  useParams,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
       


       <Routes>
       <Route exact path="/tickets/:TicketId" element={<Ticket/>} >
        </Route>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
