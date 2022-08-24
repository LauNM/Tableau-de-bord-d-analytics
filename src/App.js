import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from 'pages/Dashboard';
import TopNavBar from "components/Navbar/TopNavBar/TopNavBar";
import LateralNavBar from "components/Navbar/LateralNavBar/LateralNavBar";
import { user } from "api/fetchMockData";
import Home from "pages/Home";

function App() {

  return (
    <div className="App">
      <TopNavBar />
      <LateralNavBar />
      <div className={'main'}>
        <div className={'choose-user'}>
           {user.map((el) =>
        <Link to={`/${el.id}`} key={el.id}>
           <button key={el.id}>User {el.id}</button>
        </Link>
        )}
        </div>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/:id" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
