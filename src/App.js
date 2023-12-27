import CardEditor from "./CardEditor";
import CardViewer from "./CardViewer";
import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { front: 'front1', back: 'back1' },
        { front: 'front2', back: 'back2' }
      ],
      editor: true,
    };
  }

  addCard = card => {
    const cards = this.state.cards.slice().concat(card);
    this.setState({ cards });
  };

  deleteCard = index => {
    const cards = this.state.cards.slice();
    cards.splice(index, 1);
  }

  switchMode = () => this.setState({ editor: !this.state.editor });

  render() {
    if (this.state.editor) {
      return (
        <CardEditor addCard={this.addCard} deleteCard={this.deleteCard} cards={this.state.cards} switchMode={this.switchMode}/>
      );
    } else {
      return (
        <CardViewer cards={this.state.cards} switchMode={this.switchMode}/>
      );
    }
  }

}

export default App;
