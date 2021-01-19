import React from 'react'; 
import GiphyList from './component/GiphyList';
import NavSearchBar from './component/NavSearchBar'
import FavoriteList from './component/FavoriteList'
import {HashRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
   <HashRouter>
     <Switch>
      <Route path= '/' component={GiphyList} /> 
     <Route path='/favorite' exact component={FavoriteList} />
     </Switch>
    
   </HashRouter>
  );
}

export default App;
