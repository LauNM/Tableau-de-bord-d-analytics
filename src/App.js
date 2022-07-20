import './App.css';
import Dashboard from './pages/Dashboard';
import TopNavBar from "./components/TopNavBar/TopNavBar";
import LateralNavBar from "./components/LateralNavBar/LateralNavBar";
import {useCallback, useState} from "react";
import { user } from "./api/fetchMockData";

function App() {
  const [userSelected, setSelected] = useState(null);
  const handleClick = useCallback(
    (user) => () => setSelected(user),
    []
  );
  return (
    <div className="App">
      <TopNavBar />
      <LateralNavBar />
      <div className={'main'}>
        {user.map((el) =>
          <button key={el.id} onClick={handleClick(el)}>User {el.id}</button>
        )}
        { userSelected ? <Dashboard id={userSelected.id} name={userSelected.userInfos.firstName}/> : '' }
      </div>
    </div>
  );
}

export default App;
