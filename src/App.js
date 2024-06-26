import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {orginals,actions,trendings, rommance, comedy, horror} from './urls'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url={orginals} title='Netflix Orginals' />
     <RowPost url={actions} title='Actions' isSmall  />
     <RowPost url={trendings} title='Trendings' isSmall  />
     <RowPost url={rommance} title='Romance' isSmall  />
     <RowPost url={comedy} title='Comedy' isSmall  />
     <RowPost url={horror} title='Horror' isSmall  />

    </div>
  );
  }

export default App;
