import React from 'react'; 
import axios from 'axios';

import NavSearchBar from './NavSearchBar';
import Giphy from './Giphy';

 export default class GiphyList extends React.Component{ 
     constructor(props){
         super(props)
         this.state = { 
             submittedInput: "",
             giphy: []
         }
     }
  
     submitInput = (inputText) => {
      let replacedInputText = inputText.split(' ').join('+');

      let url = "http://api.giphy.com/v1/gifs/search?q=" + replacedInputText 
        +"&api_key=DSnJpitZhmQcDeM5vIVQEVjxEO81aOe0&limit=25";
        
       axios.get(url).then((res)=> {
          let giphy = res.data.data
          this.setState({ giphy: giphy,submittedInput: inputText})
       })
       .catch((error)=>{
          console.log(error)
       })
     }
  render(){ 
    let header = "";
    if(this.state.submittedInput !== ''){
      header = (<h4>Search result for <em>{this.state.submittedInput}</em>:</h4>);
    }
    console.log(this.state.giphy)

    const giphy = this.state.giphy.map((info, i) =>(
      <Giphy getinfo={info} key={i} />
      
    ));
      return(
          <div className='container'>
              <NavSearchBar submitInput={this.submitInput} /> 
               {header}
              
               {giphy}
               </div>
      )
  }

}
