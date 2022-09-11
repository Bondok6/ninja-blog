import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
