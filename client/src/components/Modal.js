import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';
import {Link} from 'react-router-dom';

const Modal = ({onDelete}) => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
      <div onClick={(e) => e.stopPropagation()} className="ui standart modal visible active">
        <div className="header">Delete Note</div>
        <div className="content">
          Are you sure you want delete this note?
        </div>
        <div className="actions">
          <button onClick={onDelete} className="ui primary button">Delete</button>
          <Link to="/" className="ui button">Cancel</Link>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default Modal;