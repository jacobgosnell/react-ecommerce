import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

class SignIn extends Component {
  render() {
    return (
      <div className='sign-in'>
        Sign in
      </div>
    );
  }
}

SignIn = reduxForm({
  form: 'Signin'
})(SignIn);

export default SignIn;