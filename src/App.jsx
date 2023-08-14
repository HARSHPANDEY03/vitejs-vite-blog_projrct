import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/new" exact element={<New />} />
      </Routes>
    </>
  );
}

export default App;
