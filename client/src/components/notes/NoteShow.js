import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNote} from '../../actions';

class NoteShow extends Component {
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>{this.props.note.title}</h1>
        <h5>{this.props.note.description}</h5>
      </div>
    )
  }
}

const mapStateToProps= (state, ownProps) => {
  return {
    note: state.notes[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchNote})(NoteShow);