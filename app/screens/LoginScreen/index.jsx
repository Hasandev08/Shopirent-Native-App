import React from 'react'
import { Text, View } from 'react-native'

import AppForm from '../../components/Forms/AppForm'
import AppFormField from '../../components/Forms/AppFormField'
import FormHeader from '../../components/Forms/FormHeader'
import SubmitButton from '../../components/Forms/SubmitButton'

import * as Yup from 'yup'

import { styles } from './style'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter valid email').required('Email is required'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <FormHeader
        title='Sign In'
        subTitle='SIGN UP'
        text='Login to rent the products'
        onPress={() => navigation.navigate('Signup')}
      />
      <View style={styles.components}>
        <AppForm
          initialValues={{ email: '', password: '' }}
          onSubmit={() => navigation.navigate('Customer')}
          validationSchema={validationSchema}
        >
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
          <View style={styles.row}>
            <Text style={styles.phrase} onPress={() => navigation.navigate('ForgotPassword')}>
              Forgot Password?
            </Text>
          </View>
          <View style={styles.loginButton}>
            <SubmitButton title='Login' />
          </View>
        </AppForm>
      </View>
    </View>
  )
}

export default LoginScreen
