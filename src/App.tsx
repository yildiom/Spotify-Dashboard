// import React from "react";

// import "./App.css";

// function App() {
//   return <div className="App">Hello World</div>;
// }

// export default App;

import React from "react";
import { Router as BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";

import history from "./custom-history";

class App extends React.PureComponent<{}> {
  render() {
    return (
      <BrowserRouter history={history}>
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
