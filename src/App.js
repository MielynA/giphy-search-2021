import React from 'react'; 
import GiphyList from './component/GiphyList';
import NavSearchBar from './component/NavSearchBar'


function App() {
  return (
    // You don't need to wrap GiphyList in a div here, because 1) the component App is returning a single component,
    // GiphyList and 2) this div isn't providing any styling or really doing anything here.
    // Note: you only need to wrap content if you are returning _multiple_ components from a component.
    // For example, this App component would break if you tried to return <h1>Hello</h1><h2>Goodbye</h2> because you are
    // trying to return two components/elements from the App component. You would have to wrap these in something so that 
    // App is returning just one component/element.
    <div>
      <GiphyList />
    </div>
  );
}

export default App;
