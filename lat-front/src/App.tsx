import ChessBoard from './components/ChessBoard';
import './App.css';
import setMovePieces from './components/SetMovePieces';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='title'>
          <h1>LAT (Like a Tal)</h1>
          <h2>GitHub: <a target="_blank" rel="noreferrer" href="https://github.com/CesarMinhoz99/LAT">CesarMinhoz99</a></h2>
          <div className='play'>
            <button onClick={() => setMovePieces("E2", "E4")}>Play</button>
          </div>
        </div>
      </header>

      <div className="container">

        <ChessBoard />
      </div>
    </div>
  );
}


