import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
///page component
import Home from './Pages/Home/Home'
import Recipe from './Pages/Recipe/Recipe'
import Search from './Pages/Search/Search';
import Create from './Pages/Create/Create';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Recipe/:id" element={<Recipe/>} />
      <Route path="/Search" element={<Search/>} />
      <Route path="/Create" element={<Create/>} />
      
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
