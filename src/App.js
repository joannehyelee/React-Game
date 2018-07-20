import React, { Component } from 'react';
import './App.css';
import Score from "./components/Score";
import Header from "./components/Header";
import Character from "./components/Character";

const characters = [
  {
    id: 1,
    name: "Louise",
    image: "https://img.buzzfeed.com/buzzfeed-static/static/2017-06/14/20/enhanced/buzzfeed-prod-fastlane-01/enhanced-7008-1497486325-4.jpg?downsize=715:*&output-format=auto&output-quality=auto"
  },
  {
    id: 2,
    name: "Bob",
    image: "https://img.buzzfeed.com/buzzfeed-static/static/2017-06/14/20/enhanced/buzzfeed-prod-fastlane-02/enhanced-1575-1497485632-2.jpg"
  },
  {
    id: 3,
    name: "Linda",
    image: "https://img.buzzfeed.com/buzzfeed-static/static/2017-06/14/20/enhanced/buzzfeed-prod-fastlane-02/enhanced-717-1497485765-7.jpg?downsize=715:*&output-format=auto&output-quality=auto"
  },
  {
    id: 4,
    name: "Gene",
    image: "https://img.buzzfeed.com/buzzfeed-static/static/2017-06/14/20/enhanced/buzzfeed-prod-fastlane-03/enhanced-15415-1497486076-4.jpg?downsize=715:*&output-format=auto&output-quality=auto"
  },
  {
    id: 5,
    name: "Tina",
    image: "https://img.buzzfeed.com/buzzfeed-static/static/2017-06/14/20/enhanced/buzzfeed-prod-fastlane-03/enhanced-16232-1497485932-2.jpg?downsize=715:*&output-format=auto&output-quality=auto"
  },
  {
    id: 6,
    name: "Teddy",
    image: "https://img.buzzfeed.com/buzzfeed-static/static/2017-06/14/20/enhanced/buzzfeed-prod-fastlane-02/enhanced-2124-1497486720-2.jpg?downsize=715:*&output-format=auto&output-quality=auto"
  },
  {
    id: 7,
    name: "Tammy",
    image: "https://img.buzzfeed.com/buzzfeed-static/static/2017-06/14/20/enhanced/buzzfeed-prod-fastlane-01/enhanced-7471-1497486802-4.jpg?downsize=715:*&output-format=auto&output-quality=auto"
  },
  {
    id: 8,
    name: "Jimmy Jr",
    image: "https://img.buzzfeed.com/buzzfeed-static/static/2017-06/14/20/enhanced/buzzfeed-prod-fastlane-01/enhanced-8029-1497487094-7.jpg?downsize=715:*&output-format=auto&output-quality=auto"
  },
  {
    id: 9,
    name: "Gale",
    image: "https://img.buzzfeed.com/buzzfeed-static/static/2017-06/14/20/enhanced/buzzfeed-prod-fastlane-02/enhanced-2044-1497487644-7.jpg?downsize=715:*&output-format=auto&output-quality=auto"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Score />
        <Header />

        <Character characters={characters} />

      </div>
    );
  }
}

export default App;
