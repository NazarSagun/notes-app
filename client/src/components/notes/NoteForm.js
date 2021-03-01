import React, {Component} from 'react';
//import redux form
import { Field, reduxForm } from 'redux-form';
//import action
import {connect} from 'react-redux';

class NoteForm extends Component {

  renderError = ({error, touched}) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({input, label, meta}) => {
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  formComponent() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name='title' component={this.renderInput} label='Enter title' />
        <Field name='description' component={this.renderInput} label='Enter description' />
        <button className='ui button primary'>Submit</button>
      </form>
    )
  }

  errorComponent() {
    return (
      <div className="ui warning message">
        <div className="header">
          You must register before creating or editing a note!
        </div>
      </div>
    )
  }
  render() {

    const renderComponent = this.props.isSignedIn ? this.formComponent() : this.errorComponent()

    return (
      <div>
        {renderComponent}
      </div>
        
    )
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }
  return errors
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

const wrapedForm = reduxForm({form: 'noteForm', validate})(NoteForm);
export default connect(mapStateToProps)(wrapedForm);