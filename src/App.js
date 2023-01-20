import './App.css';
import NewsList from './components/NewsList';
function App() {
  return (
    <div className="App">
      {/*Tried to do searchBar but did not work*/}
      <h1>News App</h1>
      {/*<div className="search">
        <input type="text" 
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Search"
        />
  </div>*/}
      <NewsList />
    </div>
  );
}

export default App;
