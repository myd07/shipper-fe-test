import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';
import { FETCH_LIST } from 'constants/actions/mainActions';

const tempratureAvg = (dataArr) => {
  const times = dataArr.length;
  let totalTemprature = 0;
  for (let index = 0; index < dataArr.length; index++) {
    totalTemprature += dataArr[index].main.temp_max;
  }
  return Number.parseFloat(totalTemprature/times).toFixed(2);
}

const tempratureDifferenceAvg = (dataArr) => {
  const times = dataArr.length;
  let totalTemprature = 0;
  for (let index = 0; index < dataArr.length; index++) {
    totalTemprature += dataArr[index].main.temp_max - dataArr[index].main.temp_min;
  }
  return Number.parseFloat(totalTemprature/times).toFixed(2);
}

const List = ({ main, dispatch }) => {
  const { list, city } = main;
  return (
    <React.Fragment>
      <div className="select">
        <select
          defaultValue=""
          onChange={(e) => {
            dispatch(FETCH_LIST(e.target.value));
          }}
        >
          <option value="">Pilih Kota</option>
          <option value="1642911">Jakarta</option>
          <option value="1880252">Singapore</option>
          <option value="1609350">Bangkok</option>
        </select>
      </div>
      {
        list && list.length > 0 && (
          <div className="table-body">
            <table>
              <thead>
                <tr>
                  <td>{city}</td>
                  <td>Suhu</td>
                  <td>Perbedaan</td>
                </tr>
              </thead>
              <tbody>
                {
                  list.map(item => {
                    return (
                      <tr key={item.dt}>
                        <td>{moment(item.td).format('YYYY-MM-DD')}</td>
                        <td>{item.main.temp}</td>
                        <td>{Number.parseFloat(item.main.temp_max - item.main.temp_min).toFixed(2)}</td>
                      </tr>
                    )
                  })
                }
                <tr>
                  <td>Rata - Rata</td>
                  <td>{tempratureAvg(list)}</td>
                  <td>{tempratureDifferenceAvg(list)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      }
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  React.memo,
  withConnect
)(List)