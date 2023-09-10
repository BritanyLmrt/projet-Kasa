// AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/ErrorPage';
import About from './pages/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/error404" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
