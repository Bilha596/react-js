import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const logoSrc =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png";

function App() {
    return (
        <div className="App">
            <div className="AppGlass">
              <div></div>
              <div></div>
              <div></div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
