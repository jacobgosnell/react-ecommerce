import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ShopSearchBar from './shopSearchBar';
import ShopProduct from './shopProduct';
import ShopCart from './shopCart';

class Shop extends Component {
  constructor() {
    super()

    this.state = {
      showCart: true
    }
  }

  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: 'Login',
        path: '/signin'
      }
    ]
    this.props.setHeaderLinks(headerLinks);
    this.props.fetchShopCategories(() => {
      this.props.setNavbarLinks(this.props.categories);
    });
    //filter products with links
    this.props.fetchShopProducts();
  }

  shouldComponentUpdate(nextProps) {
    if(this.props != nextProps) {
      this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id));
    }
    return true;
  }

  onSubmit = (fields) => {
    console.log(fields);
    this.props.filterProductsWithQuery(fields)
  }

  render() {
    return (
      <div className='shop'>
        <ShopSearchBar onSubmit={this.onSubmit} className='shop__search-bar'/>
        <div className='shop__products'>
          {
            this.props.filteredProducts.map(product => {
              return (
                <ShopProduct {...product} key={product._id} />
              );
            })
          }
        </div>
        {
          this.state.showCart ? <ShopCart className='shop__cart'/> : ''
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { categories, filteredProducts, products } = state.shop;
  return { categories, filteredProducts, products }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;
