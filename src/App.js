import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotMatch from './components/NotMatch';
import Achivements from './components/Achivements';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/achivements" element={<Achivements />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
