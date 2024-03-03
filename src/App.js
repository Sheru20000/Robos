
import './App.css';
import CardList from './cardList';
import SearchBox from './searchBox';
import { robots } from './robo';

function App() {
  return (
    <div className="App">
    <h1>Robo's</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
}

export default App;
