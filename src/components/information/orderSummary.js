import React, { Component } from 'react';

import { UnderlinedTitle, InfoTitle } from './infohelp';
class OrderSummary extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} order-summary`}>
        <UnderlinedTitle className='order-summary__title'/>
        <InfoTitle className='order-summary__subtotal' title='4 stickers' value='$7.96'/>
        <InfoTitle className='order-summary__tax-shipping' title='taxes and shipping' value='$0'/>
        <InfoTitle className='order-summary__total' title='Total' value='$8.02'/>
      </div>
    );
  }
}

export default OrderSummary;