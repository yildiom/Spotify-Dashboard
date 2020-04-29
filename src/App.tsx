// import React from "react";

// import "./App.css";

// function App() {
//   return <div className="App">Hello World</div>;
// }

// export default App;

import React from "react";
import { Router as BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
//import { createBrowserHistory } from "history";
//import withConnectors from "./connectors";

import history from "./custom-history";
//const history = createBrowserHistory();

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
//withConnectors(App);
