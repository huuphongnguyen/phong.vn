import React, { Component } from "react";

export default class Comments extends Component {
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
      `${this.props.telegramdiscussurl}`
    );

    scriptEl.setAttribute("data-comments-limit", "7");
    scriptEl.setAttribute("data-color", "343638");
    scriptEl.setAttribute("data-dark-color", "FFFFFF");
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
