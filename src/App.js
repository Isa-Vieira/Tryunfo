import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  buttonValue = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const valueMax = 90;
    if (cardAttr1 <= valueMax && cardAttr1 >= 0
    && cardAttr2 <= valueMax && cardAttr2 >= 0
     && cardAttr3 <= valueMax && cardAttr3 >= 0) {
      return true;
    }
    return false;
  }

   somaValues = () => {
     const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
     const valueMaxSoma = 210;
     const sun = valueMaxSoma - cardAttr1 - cardAttr2 - cardAttr3;
     if (sun >= 0) {
       return true;
     }
     return false;
   }

    button = () => {
      const { cardName, cardDescription, cardImage, cardRare } = this.state;
      if (cardName && cardDescription && cardImage && cardRare && this.buttonValue()
      && this.somaValues()) {
        this.state.isSaveButtonDisabled = false;
      } else {
        this.state.isSaveButtonDisabled = true;
      }
    }

    onSave = (event) => {
      event.preventDefault();
      this.setState({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
        /* cardTrunfo: false, */
      });
    }

  onInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    this.button();
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          isSaveButtonDisabled={ isSaveButtonDisabled }
          cardName={ cardName }
          onInputChange={ this.onInput }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onSaveButtonClick={ this.onSave }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}
export default App;
