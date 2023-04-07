import React from 'react'
import { Text, View } from 'react-native'

import AppForm from '../../components/Forms/AppForm'
import AppFormField from '../../components/Forms/AppFormField'
import FormHeader from '../../components/Forms/FormHeader'
import SubmitButton from '../../components/Forms/SubmitButton'

import * as Yup from 'yup'

import { styles } from './style'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
})

function ForgotPassword({ navigation }) {
  return (
    <View style={styles.background}>
      <FormHeader
        title='Forgot Password'
        text='Enter your email address associated with your account. We will send OTP to reset your
      password'
      />
      <View style={styles.component}>
        <AppForm
          initialValues={{ email: '' }}
          onSubmit={() => navigation.navigate('ChangePassword')}
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
          <View style={styles.submit}>
            <SubmitButton title='Submit' />
          </View>
        </AppForm>
      </View>
    </View>
  )
}

export default ForgotPassword
