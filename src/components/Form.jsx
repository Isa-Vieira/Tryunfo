import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="cardName">
          <input
            type="text"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="cardName">
          <input
            type="textarea"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="cardName">
          <input
            type="number"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="cardName">
          <input
            type="number"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="cardName">
          <input
            type="number"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="cardName">
          <input
            type="text"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="cardName">
          <select
            type="select"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="cardName">
          <input
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>

      </form>
    );
  }
}
export default Form;
