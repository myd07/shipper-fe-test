import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addBooks } from './action';
import { useHistory } from "react-router"

const handleSubmit = (e, payload, bookList, history) => {
  e.preventDefault();
  const id = bookList.length + 1;
  const newPayload = {
    ...payload,
    id
  }

  history.push('/list');
  return addBooks(newPayload);
}

const Form = ({ bookList, dispatch }) => {
  const [author, setAuthor] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  let history = useHistory();

  return (
    <React.Fragment>
      <form onSubmit={e => dispatch(handleSubmit(e, { author, title, body }, bookList, history))}>
        <div className="input-cell author">
          <label htmlFor="author">Author</label>
          <input id="author" type="text" onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div className="input-cell title">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="input-cell body">
          <label htmlFor="body">Body</label>
          <textarea id="body" type="text" rows="6" onChange={(e) => setBody(e.target.value)} />
        </div>
        <button className="main-btn">Submit</button>
      </form>

    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return state.main
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect
)(Form)