import React from "react";

export default class NavSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }

  handleChange = (e) => {
    // This issue here was that you were setting this.setState equal to this value,
    // instead of passing in an object to set the value.
    // Reference: https://reactjs.org/docs/react-component.html#setstate
    this.setState({
      inputText: e.target.value,
    });
  };

  submitInputParent = (e) => {
    this.props.submitInput(this.state.inputText);
    e.preventDefault();
    this.setState({ inputText: "" });
  };

  render() {
    return (
      // You don't need a Fragment or div here because <nav></nav> is a single component
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Navbar</a>
        {/* ^This anchor tag needs a href prop */}
        <form className="form-inline" onSubmit={this.submitInputParent}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Giphy here"
            aria-label="Search"
            onChange={this.handleChange}
            value={this.state.inputText}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}
