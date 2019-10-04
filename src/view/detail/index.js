import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useParams } from "react-router"

const Detail = ({ bookList }) => {
  const { id } = useParams();
  let detail;
  const index = bookList.findIndex(book => book.id === Number(id));
  detail = bookList[index];
  return (
    <React.Fragment>
      <div className="card-detail">
        <h2>{detail.title}</h2>
        <p>by {detail.author}</p>
        <h3>{detail.body}</h3>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return state.main
}

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect
)(Detail)