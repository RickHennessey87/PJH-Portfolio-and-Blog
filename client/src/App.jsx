import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header    from './components/Header';
import Footer    from './components/Footer';

import Home      from './pages/Home';
import BlogList  from './pages/BlogList';
import BlogPost  from './pages/BlogPost';
import Portfolio from './pages/Portfolio';
import About     from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='container mx-auto p-4'>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/blog"     element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/portfolio"element={<Portfolio />} />
          <Route path="/about"    element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
