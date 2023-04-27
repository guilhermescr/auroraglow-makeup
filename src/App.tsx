import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Main from './components/Main';

export default function App() {
  return (
    <Router>
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Main>

      <Footer />
    </Router>
  );
}
