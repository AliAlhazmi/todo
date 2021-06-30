import './App.css';
import Layout from './components/Layout';
function App() {
  const container = {
    backgroundColor: '#ede1d4',
    maxWidth: '870px',
    minWidth: '70ch',
    minHeight: '40ch',
    margin: 'auto',
    width: '30%',
  }
  return (
    <div className="App">
        <header className="nav">
          <h1>Todo list</h1>
        </header>
        <div style={container}>
        <Layout/>
        </div>
    </div>
  );
}

export default App;
