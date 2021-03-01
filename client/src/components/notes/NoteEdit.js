import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNote, editNote} from '../../actions';
import NoteForm from './NoteForm';

class NoteEdit extends Component {
  
  componentDidMount() {
    //here we have an id of the current note
    this.props.fetchNote(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    //here we get the current note and formValues(object) of title and description
    //also we use arrow function for getting correct work of this statement
    this.props.editNote(this.props.match.params.id, formValues)
  }

  render() {
    if (!this.props.note) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <NoteForm 
          onSubmit={this.onSubmit}
          //use lodash pick functions to return new object with only title and description keys
          //edit actions should have only a properties, that needs to be changed
          initialValues={_.pick(this.props.note, 'title', 'description')}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //use ownProps to recieve a properties from NoteEdit class
  //becouse in mapStateToProps we have access only to main state
  return {note: state.notes[ownProps.match.params.id]}
}

export default connect(
  mapStateToProps,
  { fetchNote, editNote }
)(NoteEdit);