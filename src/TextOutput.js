import React, { Component } from 'react';
import './App.css';
const marked = require('marked');

class TextOutput extends Component {
  markItUp(a) {
    return {__html: a};
  }
  render() {
    return (
      <div id="preview"
        dangerouslySetInnerHTML = {this.markItUp(marked(this.props.input, {breaks: true}))}
        className="box right" />
    );
  }
}

export default TextOutput;
