import React, { Component } from 'react';

import {reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
  return (
    <div className='search-bar-grid'>
      <i className="fas fa-search-bar-grid__icon"></i>
      <input className={`${props.className} form-search-bar`} {...props.input} type='text' placeholder={`${props.placeholder}`}/>
    </div>
  );
}

class ShopSearchBar extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
        <Field className='shop-search-bar__form-search-bar' placeholder='Search' name='query' component={FormSearchBar}/>
      </form>
    );
  }
}

ShopSearchBar = reduxForm({
  form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;