import {
  SET_SHOP_CATEGORIES,
  SET_NAVBAR_LINKS,
  SET_SHOP_PRODUCTS,
  FILTER_PRODUCTS_WITH_CATEGORY_ID,
  FILTER_PRODUCTS_WITH_QUERY
} from './types';

export function filterProductsWithQuery(fields) {
  return({
    type: FILTER_PRODUCTS_WITH_QUERY,
    payload: fields
  })
}

export function filterProductsWithCategoryId(_id) {
  return ({
    type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
    payload: _id
  })
}

export function fetchShopCategories() {
  return ({
      type: SET_NAVBAR_LINKS,
      type: SET_SHOP_CATEGORIES,
      payload: [
          {
              _id: 0,
              title: 'All'
          },
          {
              _id: 1,
              title: 'JavaScript'
          },
          {
              _id: 2,
              title: 'UI/UX'
          },
          {
              _id: 3,
              title: 'Linux'
          },
          {
              _id: 4,
              title: 'Python'
          },
          {
              _id: 5,
              title: 'UML'
          },
          {
              _id: 6,
              title: 'Ruby'
          },
      ]
  })
}

export function fetchShopProducts() {
  return ({
    type: SET_SHOP_PRODUCTS,
    payload: [
      {
        _id: 0,
        title: 'JavaScript in the Browser',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.09,
        belongsTo: [0, 1],
        imageUrl: 'http://via.placeholder.com/80x80'
      },
      {
        _id: 1,
        title: 'Graph Database',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.09,
        belongsTo: [0, 6],
        imageUrl: 'http://via.placeholder.com/80x80'
      },
      {
        _id: 2,
        title: 'Full Stack Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.09,
        belongsTo: [0, 1, 4],
        imageUrl: 'http://via.placeholder.com/80x80'
      },
      {
        _id: 3,
        title: 'UI Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.09,
        belongsTo: [0, 2],
        imageUrl: 'http://via.placeholder.com/80x80'
      },
      {
        _id: 4,
        title: 'JavaScript Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.09,
        belongsTo: [0, 1],
        imageUrl: 'http://via.placeholder.com/80x80'
      },
      {
        _id: 5,
        title: 'UX Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.09,
        belongsTo: [0, 2],
        imageUrl: 'http://via.placeholder.com/80x80'
      },
      {
        _id: 6,
        title: 'OOP Programming',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.09,
        belongsTo: [0, 6],
        imageUrl: 'http://via.placeholder.com/80x80'
      }
    ]
  })
}

