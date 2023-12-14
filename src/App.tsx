import './App.css';
import { Home } from './pages/Home/Home';
import packageJson from '../package.json';

function App() {
  console.log("Current app version: ", packageJson.version)
  return (
    <div>
      <Home />
    </div>

  );
}

export default App;
