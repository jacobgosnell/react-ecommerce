import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields';

class SignInForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
        <Field 
          className='sign-in-form__email' 
          type='Email'
          title='Email' 
          name='email' 
          placeholder='Email' 
          component={FormInput}
        />
        <Field 
          className='sign-in-form__password' 
          type='Password'
          title='Password'
          name='password' 
          placeholder='Password' 
          component={FormInput}
        />
        <div className='sign-in-form__line'></div>
      <Field 
        className='sign-in-form__login' 
        type='submit'
        title='Login'
        name='login' 
        placeholder='Login' 
        component={FormButton}
        onClick={() => console.log('tryna submit')}
      />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: 'SignInForm'
})(SignInForm);

export default SignInForm;