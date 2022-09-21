import logo from './logo.svg';
import './App.css';
import AddPlayer from './pages/players/addPlayer.jsx';
import Squad from './pages/players/Squad';
import AddTeamTraining from './pages/teamTraining/addTeamTraining';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
 
function App() {
  return (
    <>
 <BrowserRouter>
      <Routes>
   
        <Route path="/" element={<AddPlayer/>} />
        <Route path="/players" element={<Squad/>} />
        <Route path="/teamtraining" element={<AddTeamTraining/>} />
      </Routes>
      </BrowserRouter>
 

 
    </>
  );
}

export default App;
