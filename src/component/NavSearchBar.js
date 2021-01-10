import React from "react";


export default class NavSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }

  handleChange = (e) => {
  
    this.setState = {
      inputText: e.target.value,
    };
  };

  submitInputParent = e => { 
    this.props.submitInput(this.setState.inputText);
    e.preventDefault();
    console.log(this.props)
    this.setState = {
      inputText: ""
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Navbar</a>
            <form className="form-inline" onSubmit={this.submitInputParent}>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search Giphy here"
                aria-label="Search"
                onChange={this.handleChange}
                value={this.setState.inputText}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
