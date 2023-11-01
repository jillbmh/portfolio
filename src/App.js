// import logo from './logo.svg';
import './App.css';
import './styles/main.scss'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path = '/contact' element= { <Contact/>} />
        <Route path ='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div>