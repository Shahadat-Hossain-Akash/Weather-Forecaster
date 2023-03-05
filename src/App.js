
import './App.css';
import Homepage from './components/homepage/Homepage';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="container">
      <Sidebar/>
      <Homepage/>
    </div>
  );
}

export default App;
