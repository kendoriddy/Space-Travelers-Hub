import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Rockets />} />
        <Route path="/missions" exact element={<Missions />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
