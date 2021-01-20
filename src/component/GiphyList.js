import React from "react";
import axios from "axios";

import NavSearchBar from "./NavSearchBar";
import Giphy from "./Giphy";

export default class GiphyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedInput: "",
      giphy: [],
    };
  }

  submitInput = (inputText) => {
    let replacedInputText = inputText.split(" ").join("+");
    // Nice!

    let url =
      "http://api.giphy.com/v1/gifs/search?q=" +
      replacedInputText +
      "&api_key=DSnJpitZhmQcDeM5vIVQEVjxEO81aOe0&limit=25";
    // This works, but string interpolation might be a bit more polished and easier to read:
    // `http://api.giphy.com/v1/gifs/search?q=${replacedInputText}&api_key=DSnJpitZhmQcDeM5vIVQEVjxEO81aOe0&limit=25`

    axios
      .get(url)
      .then((res) => {
        let giphy = res.data.data;
        // Not crucial, but it might be more transparent to name this 'data' or 'giphyData'
        // so it's a bit more specific :)
        this.setState({ giphy: giphy, submittedInput: inputText });
        // Again totally not crucial, but a fun trick:
        // when you are setting state and the key is equal to the value (e.g., giphy: giphy),
        // you can just write giphy once:
        // e.g., this.setState({ giphy, submittedInput: inputText });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {

    let header = "";
    if (this.state.submittedInput !== "") {
      header = (
        <h4>
          Search result for <em>{this.state.submittedInput}</em>:
        </h4>
      );
    }
    // This approach is fine, but another way to do this that we commonly use in the web app is commented
    // out below. Awesome that you thought about the case where input is empty!

    const giphy = this.state.giphy.map((info, i) => (
      <Giphy getinfo={info} key={i} />
    ));
    // You could put this right in the code below instead of assigning it to a const. See below.
    return (
      <div className="container">
        {/* If you put this NavSearchBar in App.js above Giphy, it will extend the length
        of the page because it'll be outside the bootstrap container class */}
        <NavSearchBar submitInput={this.submitInput} />
        {header}
        {/* You could also do: {this.state.submittedInput && <h4>Search result for {this.state.submittedInput}</h4>}
        ^ This will only return the header if submittedInput is not an empty string (which returns false).
        If you used this, you could eliminate the condition above */}

        {giphy}
        {/* You could also do: 
        {this.state.giphy.map((info, i) => <Giphy getInfo={info} key={i} />)} 
        right here instead of assigning to a const above */}
      </div>
    );
  }
}
