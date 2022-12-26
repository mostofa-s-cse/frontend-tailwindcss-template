import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="text-3xl font-bold text-red-500">
          Hello world!
        </h1>

        {/* The button to open modal */}
        <label htmlFor="my-modal" className="btn mt-5">Open Modal</label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">Yay!</label>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
