import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>t1</li>
          <li>t2</li>
          <li>ys</li>
        </ul>
        <div class="grid-container">
          <div class="grid-item">jyothi</div>
          <div class="grid-item">mayuri</div>
        </div>
        <div>
          <ol type="A">
            <li>t1</li>
            <li>t2</li>
            <li>ys</li>
          </ol>
          <ol type="a">
            <li>t1</li>
            <li>t2</li>
            <li>ys</li>
          </ol>
          <ol type="a" start="100">
            <li>t1</li>
            <li>t2</li>
            <li>ys</li>
          </ol>
          <ol type="i">
            <li> hi </li>
            <li> hello </li>
            <li> hey </li>
          </ol>
        </div>
      </header>
    </div>
  );
}

export default App;
