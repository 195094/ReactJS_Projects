import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import ErrorHandler from "./ErrorHandler";

class App extends React.Component {
  state = { lat: null, errMessage: "" };

  componentDidMount() {
    //console.log("My component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  componentDidUpdate() {
    //console.log("My component was updated - it rerendered");
  }

  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <ErrorHandler />;
    }
    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return (
      <div style={{ borderColor: "red", borderWidth: "20px" }}>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
