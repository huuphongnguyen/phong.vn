import React, { Component } from "react";

export default class TelegramComments extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
  }
  componentDidMount() {
    let scriptEl = document.createElement("script");
    scriptEl.setAttribute(
      "src",
      "https://telegram.org/js/telegram-widget.js?15"
    );
    scriptEl.setAttribute("async", true);
    scriptEl.setAttribute(
      "data-telegram-discussion",
      `${this.props.datatelegramdiscussion}`
    );
    scriptEl.setAttribute("data-comments-limit", "10");
    scriptEl.setAttribute("data-color", "0068FF");
    scriptEl.setAttribute("data-dark", "1");
    this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
      <div style={{ width: "100%" }} id="comments">
        <div ref={this.commentBox}></div>
      </div>
    );
  }
}
