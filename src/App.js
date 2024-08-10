import './App.css';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import Home from './components/Home';
import DrugDetail from './components/DrugDetail';

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/drugs' element={<Search />} />
        <Route path="/drug/:rxcui" element={<DrugDetail />} />
      </Routes>
    </div>
  );
}

export default App;
