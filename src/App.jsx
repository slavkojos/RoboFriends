import React, { useState, useEffect} from 'react';
import './App.css';

import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";
import Scroll from "./Components/Scroll";



function App() {
  
const [robots, updateRobots] = useState([]);
const [filteredRobots, filterRobots] = useState([robots]);

useEffect(function effectFunction() {
fetch('https://raw.githubusercontent.com/slavkojos/mockdata/master/MOCK_DATA_100.json')
  .then(response => response.json())
  .then(data => {
      updateRobots(data);
      filterRobots(data);
  });
}, []);

function filterRobotsArray(event) {
let searchValue = event.target.value;
filterRobots(robots.filter(robot => {
return (robot.name.toLowerCase().includes(searchValue.toLowerCase()))
}));


}

  


  return (
    <div className="App tc ma2">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={filterRobotsArray} />
      <Scroll >
        <CardList robots = {filteredRobots}/>
      </Scroll>
      
    </div>
  );
}

export default App;
