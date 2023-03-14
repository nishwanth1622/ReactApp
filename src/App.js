import React, { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Services from './Services';
import Register from './Register';
import PersonComponent from './PersonComponent';
//import Employee from './Employee';
import NameComponent from './NameComponent';
import Search from'./Search';


function App() { //Es5

  const Wrapper = (props) => {
    const params = useParams();
    return <Services {...{ ...props, match: { params } }} />
  }

  return (
    <div className="App">

      <Router>
        <ul>
          <button type="button">
            <li>
              <Link to="/">HomePage</Link>
            </li>
          </button>
          <button type="button">
            <li>
              <Link to="/AboutUs">AboutUs</Link>
            </li>
          </button>
          <button type="button">
            <li>
              <Link to="/Services/Main">Services</Link>
            </li>
          </button>
          <button type="button">
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </button>
          <button type="button">
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </button>
          {/* <button type="button">
            <li>
              <Link to="/employees">Employees</Link>
            </li>
          </button> */}
          <button type="search">
            <li>
              <Link to='/search'>Search</Link>
            </li>
          </button>

        </ul>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          {/* <Route path="/employees" element={<Employee />} /> */}
          <Route path="/Services/:id" element={<Wrapper />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/persons" element={<PersonComponent />} />
          <Route path="/customers" element={<NameComponent />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
