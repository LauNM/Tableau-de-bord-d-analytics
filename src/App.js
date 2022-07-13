import './App.css';
import Dashboard from './pages/Dashboard';
import TopNavBar from "./components/TopNavBar/TopNavBar";
import LateralNavBar from "./components/LateralNavBar/LateralNavBar";

function App() {
  const userId = 12;
  return (
    <div className="App">
      <TopNavBar />
      <LateralNavBar />
      <div className={'main'}>
        <Dashboard userId={userId}/>
      </div>
    </div>
  );
}

export default App;
