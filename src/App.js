import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Units from './pages/Units.js';
import './pages/General.css';
import Image from "./img/world.jpg";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="units" element={<Units />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav className="nav-bar">
        <ul className="nav-links">
            <Link className="navbar-text" to="/">Home</Link>
        </ul>
         <ul>
            <Link className="navbar-text" to="/units">Units</Link>
         </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
    return(
        <>
        <div className="home">
  <p className="home-text">
 Ages of Empires Home Page
 </p>
 <div>
  <img className="home-img" src={Image} alt="age" />
</div>
</div>
  </>
    ) 
  }