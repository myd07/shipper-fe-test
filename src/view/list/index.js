import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

const List = ({ bookList }) => {

  return (
    <React.Fragment>
      {
        bookList.map(book => (
          <Link to={`list/${book.id}`} key={book.id}>
            <div className="card">
              <span>author: {book.author}</span>
              <h3>{book.title}</h3>
            </div>
          </Link>
        ))
      }
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return state.main
}

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect
)(List)