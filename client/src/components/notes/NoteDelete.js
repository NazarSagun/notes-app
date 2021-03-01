import React, {Component} from 'react';
import Modal from '../Modal';
import {fetchNote, deleteNote} from '../../actions';
import {connect} from 'react-redux';

class NoteDelete extends Component {

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id);
  }

  deleteHandler = () => {
    const {id} = this.props.match.params;
    this.props.deleteNote(id);
  }

  renderModal() {
    if (!this.props.note) {
      return (
        <div className="ui active centered inline loader"></div>
      )
    }
    return (
      <Modal onDelete={this.deleteHandler} />
    )
  }

  errorComponent() {
    return (
      <div className="ui warning message">
        <div className="header">
          You can't delete this Note! It is not yours!
        </div>
      </div>
    )
  }


  render() {
    const renderComponent = (this.props.currentUserId) ? this.renderModal() : this.errorComponent();

    return (
      <div>
        {renderComponent}
      </div>
    )
    
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.notes[ownProps.match.params.id],
    currentUserId: state.auth.userId
  }
}

export default connect(mapStateToProps, {fetchNote, deleteNote})(NoteDelete);