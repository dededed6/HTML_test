import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Header from './components/Header';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}
