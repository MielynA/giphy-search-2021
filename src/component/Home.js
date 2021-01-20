import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      showName: false,
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ showName: true });
  };

  toCapitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <input
              className="form-control mr-sm-1"
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleSubmit}>
              Press me!
            </button>
            <h1 className="display-4">
              {" "}
              {this.state.showName && (
                <p>
                  Hello! {this.toCapitalize(this.state.name)} Welcome to the
                  Giphy Search
                </p>
              )}{" "}
            </h1>
          </form>
        </div>
      </div>
    );
  }
}
