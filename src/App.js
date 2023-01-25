import { Route, Routes } from 'react-router';
import './App.css';
// import Footer from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import AboutUs from './Pages/About us/AboutUs';
import Workshop from './Pages/Workshop/Workshop';
import Domain from './Pages/Domain/Domain';
import OneDomain from './components/domain/OneDomain';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main id='body'>
      <Routes>
      <Route path='/' element={<HomePage/>} />
        <Route path='/workshop' element={<Workshop/>} />
        <Route path='/domain' element={<Domain/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/domain/:title' element={<OneDomain/>}/>
        <Route path='/workshop' element={<Workshop/>}/>
      </Routes>
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
