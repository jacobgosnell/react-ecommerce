import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';


class Purchases extends Component {

  componentDidMount() {
    this.props.fetchUserPurchases();
  }

  render() {
    const { className, purchases } = this.props;
    return (
      <div className={`${className} purchases`}>
        {
          purchases.map(purchase => {
            return (
              <div key={purchase._id} className='purchases__purchase purchase'>
                <img className='purchase__img' src='http://via.placeholder.com/80x80'/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { purchases } = state.user;
  return { purchases };
}

Purchases = connect(mapStateToProps, actions)(Purchases);

export default Purchases;