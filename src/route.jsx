// AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/ErrorPage';
import About from './pages/About';
import CardPage from './pages/CardPage';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/card/:id" element={<CardPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
