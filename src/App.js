import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import FeedDetails from './pages/feedDetails';
import UserDetails from './pages/userDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/posts/:id' element={<FeedDetails />} />
        <Route path='/users/:id' element={<UserDetails/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
