import React, { Component } from "react";
import Header from "../Header/Header";
import Score from "../Score/Score";
import Character from "../Character/Character";

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

class Game extends React.Component {

    state = {
        score: 0,
        game: []
    };

    handleClick = event => {

        this.setState({ 
            score: this.state.score + 1,
            game: this.state.id
        });

    };

    // If user clicks on same image, set score back to 0
        // Get the id of the image clicked 
    // That score is set to top score


    render() {
        return (
            <div>
                <Score 
                    score={this.state.score}
                    game={this.state.game}
                />
                <Header />
                <Character 
                    characters={characters}
                    handleClick={this.handleClick} 
                />
            </div>
        );
    }

}

export default Game;