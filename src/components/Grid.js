import React, { Component } from 'react';
import Single from './Single';

export default class Grid extends Component {
  removeNote = (note) => {
    this.props.removeNote(note);
  }
  renderItems() {
    return this.props.notes.map(note =>
      <Single
        key={note.id}
        note={note}
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
