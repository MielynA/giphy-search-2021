import React from 'react'; 

 const Giphy = props => {
   // console.log(props.getinfo.images.url)
     let src = props.getinfo.images["fixed_width"].url;
     console.log(src)
    return (
        
        <React.Fragment>  
           
            
            
            <div className="column image">
                <img src={src} alt={props.gifInfo}/>
           </div>
        </React.Fragment>
    );
 
 }

 export default Giphy; 

 