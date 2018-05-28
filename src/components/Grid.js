import React, { Component } from 'react';
import Single from './Single';

export default class Grid extends Component {
  removeNote = (id) => {
    console.log(id);
    this.props.removeNote(id);
  }
  renderItems() {
    return this.props.notes.map(item =>
      <Single
        key={item.id}
        note={item}
        removeNote={this.removeNote}
      />
    );
  }
  render() {
    return (
      <div className="row">
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}
