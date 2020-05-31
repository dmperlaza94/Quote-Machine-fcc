import React, { Component } from "react";
import axios from "axios";
import "./index.css";
import Button from "./Componentes/Button";

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuote: undefined,
    };
    this._fechtQuotes = this._fechtQuotes.bind(this);
  }
  componentDidMount() {
    this._fechtQuotes();
  }
  _fechtQuotes() {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((response) => {
        const quotes = response.data.quotes;
        const quoteLength = quotes.length;
        const quoteIndex = Math.floor(Math.random() * quoteLength - 1);
        this.setState({
          selectedQuote: quotes[quoteIndex],
        });
      });
  }
  render() {
    const { selectedQuote } = this.state;
    if (!selectedQuote) {
      return null;
    }
    return (
      <div id="quote-box">
        <p>{selectedQuote.quote}</p>
        <p>{selectedQuote.author}</p>
        <Button buttonDisplayName="New quote" onClick={this._fechtQuotes} />
      </div>
    );
  }
}
export default QuoteMachine;
