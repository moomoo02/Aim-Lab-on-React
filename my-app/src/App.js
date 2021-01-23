import logo from './logo.svg';
import './App.css';
import BeginCountdown from './components/BeginCountdown';
import CircleSpawner from './components/CircleSpawner';

function App() {
  var started = false
  return (
    <div className="App">
      <header className="App-header">
        <BeginCountdown/>
        <CircleSpawner/>
      </header>
    </div>
  );
}

export default App;
