import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import Room from './Room';
function App() {
  return (
    <div className="App">
     <Routes>
      {/* First time coming to this page therefore we would go to  */}
      <Route path="/" element={<Home />} />
      <Route path='room/:roomId' element={<Room />} />
     </Routes>
    </div>
  );
}

export default App;
