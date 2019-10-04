import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

const handleSubmit = (e) => {
  e.preventDefault();
}

const Form = ({ bookList, dispatch }) => {
  const [author, setAuthor] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  return (
    <React.Fragment>
      <form onSubmit={e => handleSubmit(e)}>
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