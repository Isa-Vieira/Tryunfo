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
      cardList: [],
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
      const { cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3 } = this.state;

      const valor = { cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardRare };
      event.preventDefault();
      this.setState((prevState) => ({
        cardList: [...prevState.cardList, valor],
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
        /* cardTrunfo: false, */
      }));
    };

    // if de curtocircuito &&, é obritario que faça, ! sempre vai fazer ao controrio com true e false. - Ajuda Dani Muller
  onInput = (event) => {
    const { cardTrunfo } = this.state;
    const valedetCardTrunfo = event.target.name === 'cardTrunfo'
    && !cardTrunfo;
    this.setState(() => ({ [event.target.name]: event.target.value,
      cardTrunfo: valedetCardTrunfo,
      hasTrunfo: valedetCardTrunfo }));
  }

    remove = (name) => {
      this.setState((prevCard) => ({
        cardList: prevCard.cardList.filter((param) => param.cardName !== name) }),
      () => {
        const { cardList } = this.state;
        this.setState({ hasTrunfo: cardList.some((item) => item.cardTrunfo) });
      });
    }

    render() {
      this.button();
      const { cardName, cardDescription,
        cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
        cardTrunfo, hasTrunfo, isSaveButtonDisabled, cardList } = this.state;
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
          { cardList.map((card, index) => (
            <div key={ index }>
              <Card
                { ...card }
              />
              <button
                data-testid="delete-button"
                type="button"
                onClick={ () => this.remove(card.cardName) }
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      );
    }
}
export default App;
