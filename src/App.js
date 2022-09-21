import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import Trivia from './Pages/Trivia'

function App() {
  return (
    <div >
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/trivia" element={<Trivia />} />
      </Routes>
    </div>
  );
}

export default App;
