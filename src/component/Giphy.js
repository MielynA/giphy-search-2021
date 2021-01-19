import React from "react";

const Giphy = (props) => {
  // console.log(props.getinfo.images.url)
  let src = props.getinfo.images["fixed_width"].url;
  // console.log(src)
  return (
    // You don't need a React Fragment here because this is already wrapped in a div
    <React.Fragment>
      <div className="column image">
        <img src={src} alt={props.gifInfo} />
        {/* Nice job including the alt prop! */}
      </div>
    </React.Fragment>
  );
};

export default Giphy;
