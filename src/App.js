import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';

/**
 * this is the top-level component so we need to import our actions into it,
 * and then use them as props (you cannot use them as props unless you do the
 * mapDispatchToProps and mapStateToProps)
 */
import { getNotes, addNote, removeNote } from './store/actions';


// styles in-component - pay attention to the syntax
const styles = {
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif',
};

/**
 * App is the top level component so it has access to the initial state and all
 * the actions inside store, so the components inside App can use all those as
 * props.
 */
class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Header name={this.props.name}/>
        <Form addNote={this.props.addNote}/>
        <Grid notes={this.props.notes} removeNote={this.props.removeNote}/>
      </div>
    );
  }
}

/**
 * App will not have `name` or any of the actions such as `addNotes` available to it
 * so that other components such as `Header` or `Form` or `Grid` can use them as props
 * unless you connect your App component to the store's state and actions/reducers
 * The way we do it is like this: (in other words redux integration inside your react app):
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNotes: () => {
      dispatch(getNotes())
    },
    addNote: (note) => {
      dispatch(addNote(note))
    },
    removeNote: (id) => {
      dispatch(removeNote(id))
    },
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
    name: state.name,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
