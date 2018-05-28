import React from 'react';

const Single = ({ note, removeNote }) => {
  return (
    <li className="col s4">
      <div className="card teal darken-1">
        <div className="card-content white-text">
          <span className="card-title">{note.title}</span>
          <p>{note.details}</p>
        </div>
        <div className="card-action">
          <a onClick={() => removeNote(note)}>Delete</a>
        </div>
      </div>
    </li>

  );
}

export default Single;
