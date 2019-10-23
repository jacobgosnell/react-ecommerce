import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton, LongGrayButton } from '../formFields';
import Details from '../details';
import history from '../../history';

class AccountInformationForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const links = [
      {
        _id: 0,
        title: 'Not registered? Create an account here.',
        onClick: () => history.push('/signup')
      },
      {
        _id: 1,
        title: 'Forgot account email?',
        onClick: () => console.log('forgot email')
      },
      {
        _id: 2,
        title: 'Forgot password?',
        onClick: () => console.log('forgot password')
      }
    ]
    return (
      <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
        <Field className='account-information-form__name'
          type='name'
          title='Name'
          placeholder='Name'
          name='name'
          component={FormInput}/>
        <Field className='account-information-form__email'
          type='Email'
          title='Email' 
          name='email' 
          placeholder='Email' 
          component={FormInput}/>
        <Field className='account-information-form__street-address'
          type='address'
          title='Street Address'
          placeholder='Street Address'
          name='address'
          component={FormInput}/>
        <Field className='account-information-form__city'
          type='city'
          title='City'
          placeholder='City'
          name='city'
          component={FormInput}/>
        <Field className='account-information-form__state'
          type='state'
          title='State'
          placeholder='State'
          name='state'
          component={FormInput}/>
        <Field className='account-information-form__zipcode'
          type='zipcode'
          title='Zipcode'
          placeholder='Zipcode'
          name='zipcode'
          component={FormInput}/>
        <Field classname='account-information-form__change-password'
          onClick={() => console.log('tryna show passwords')}
          type='button'
          labelTitle='Password'
          title='Change Password'
          name='change-password'
          component={LongGrayButton}/>
      <Field 
        className='sign-in-form__login' 
        type='submit'
        title='Login'
        name='login' 
        placeholder='Login' 
        component={FormButton}
        onClick={() => history.push('/account')}
      />
      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;