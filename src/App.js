import logo from './logo.svg';

function App() {
  return (
    <div className="text-center bg-neutral-800">
      <header className="App-header min-h-screen flex flex-col justify-center text-3xl">
        <img src={logo} className="animate-spin-20s h-[40vmin] pointer-events-none" alt="logo"/>
        <p className="text-neutral-100">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-cyan-300"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
