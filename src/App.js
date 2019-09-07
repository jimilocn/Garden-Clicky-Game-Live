import React, {
  Component
} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron";
import ModalLoss from "./components/ModalLoss";

import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clicked:[],
    score:0,
    highestscore:0,
    gameOver:false,
  };



  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.map(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    if (!this.state.clicked.includes(id)) {


      this.state.clicked.push(id);
      let score = this.state.score;
      score++;
      let topScore = score > this.state.highestscore ? score : this.state.highestscore

      
      

      this.setState({
      friends: this.state.friends.sort(()=> Math.random()-0.5),
      score:score,
      highestscore:topScore,
      clicked:this.state.clicked,
      })
      return friends;
    
    } else {

  
      this.setState({
        score:0,
        clicked:[],
        gameOver:true
      })

    // alert("you already picked this one")



    
    }
};

closeModal= id => {
  this.setState({
    gameOver:false
  })
}

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return ( 
    <Wrapper >
      <Jumbotron ></Jumbotron>
      <Title >Flowers in current bouquet: {this.state.score}</Title> 
      <Title >Biggest bouquet you've picked: {this.state.highestscore}</Title> 
      {this.state.friends.map(friend => ( <FriendCard 
          removeFriend = {this.removeFriend}
          id = {friend.id}
          key = {friend.id}
          image = {friend.image}
          clicked = {friends.clicked}
          />
        ))
      } 
      {this.state.gameOver && <ModalLoss closeModal = {this.closeModal} gameOver = {this.state.gameOver}/>}
    </Wrapper>
    );
  }
}

export default App;