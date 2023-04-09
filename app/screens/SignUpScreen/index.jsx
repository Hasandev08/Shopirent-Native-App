import React from 'react'
import { ScrollView, View } from 'react-native'

import AppForm from '../../components/Forms/AppForm'
import AppFormField from '../../components/Forms/AppFormField'
import FormHeader from '../../components/Forms/FormHeader'
import SubmitButton from '../../components/Forms/SubmitButton'

import * as Yup from 'yup'

import { styles } from './style'

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  phoneNumber: Yup.string()
    .matches(/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: Yup.string().email('Please enter valid email').required('Email is required'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
  option: Yup.string()
    .matches(/\w*((buyer|Buyer)|(seller|Seller))\w*/, 'Choose either buyer or seller')
    .required('Required'),
})

const SignUpScreen = ({ navigation }) => (
  <View style={styles.background}>
    <FormHeader
      title='Sign Up'
      subTitle='SIGN IN'
      text="Don't have an account?"
      onPress={() => navigation.navigate('Login')}
    />
    <View style={styles.components}>
      <ScrollView>
        <AppForm
          initialValues={{
            fullName: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
            option: '',
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            text='Name'
            name='fullName'
            textContentType='name'
            placeholder='Full Name'
          />
          <AppFormField
            keyboardType='phone-pad'
            name='phoneNumber'
            placeholder='Phone Number'
            text='Contact'
            textContentType='telephoneNumber'
          />
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            name='email'
            placeholder='Email'
            text='Email'
            textContentType='emailAddress'
          />
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            name='password'
            placeholder='Password'
            secureTextEntry
            text='Password'
            textContentType='password'
          />
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            name='confirmPassword'
            placeholder='Confirm Password'
            secureTextEntry
            text='Confirm Password'
            textContentType='password'
          />
          <AppFormField
            text='Option'
            name='option'
            textContentType='text'
            placeholder='Buyer or Seller'
          />
          <View style={styles.signupButton}>
            <SubmitButton title='Signup' />
          </View>
        </AppForm>
      </ScrollView>
    </View>
  </View>
)

export default SignUpScreen
