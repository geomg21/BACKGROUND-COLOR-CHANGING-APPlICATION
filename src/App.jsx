import './App.css';

function App() {
  const colorData = (data) => {
    document.body.style.backgroundColor = data;
  };

  return (
    <>
      <div className="container">
        <h1>BACKGROUND COLOR CHANGING APP</h1>
        <div className="btns">
          <button
            onClick={() => colorData('green')}
            className="btn btn-success custom-btn"
          >
            GREEN
          </button>

          <button
            onClick={() => colorData('grey')}
            className="btn btn-dark custom-btn"
          >
            GREY
          </button>

          <button
            onClick={() => colorData('red')}
            className="btn btn-danger custom-btn"
          >
            RED
          </button>

          <button
            onClick={() => colorData('yellow')}
            className="btn btn-warning custom-btn"
          >
            YELLOW
          </button>

          <button
            onClick={() => colorData('aqua')}
            className="btn btn-info custom-btn"
          >
            AQUA
          </button>
        </div>
      </div>
    </>
  );
}

export default App;


