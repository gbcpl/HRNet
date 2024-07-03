import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Employees from '../components/pages/Employees';

function Router() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
  </BrowserRouter>
  )
}

export default Router