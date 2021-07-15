import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";

/*
// day 4 program 2
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Maxx",
      id: "101"
    };
  }

  render() {
    setTimeout(() => {
      this.setState({ name: "Vikash", id: "222" });
    }, 2000);
    return (
      <div>
        <h1>Hello {this.state.name} </h1>
        <h2> Your Id is {this.state.id} </h2>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
*/

// day 4 program 3

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [{ id: "111" }, { id: "222" }, { id: "333" }, { id: "444" }]
    };
  }

  render() {
    return (
      <div>
        <div>
          {this.state.data.map((dynamicContent) => (
            <p>{dynamicContent.id}</p>
          ))}
        </div>
      </div>
    );
  }
}

// {this.state.data.map((dynamicContent) => (
//   <p>{dynamicContent.id}</p>
// ))}

//class Content extends React.

ReactDOM.render(<App />, document.getElementById("root"));
