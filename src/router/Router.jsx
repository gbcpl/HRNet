import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Employees from '../pages/Employees';

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