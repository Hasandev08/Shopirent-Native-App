import React from 'react'
import { Image, ImageBackground, Text, TouchableWithoutFeedback, View } from 'react-native'

import AppButton from '../../components/AppButton'

import colors from '../../config/colors'
import { styles } from './style'

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../../assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        <View style={styles.text}>
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.tag}>Log In to experience the best renting application</Text>
        </View>
        <View style={styles.footer}>
          <AppButton
            title='Sign In'
            onPress={() => navigation.navigate('Login')}
            buttonColor={colors.white}
            textColor={colors.primary}
          />
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.footerTag}>
              Don't have an account? Click here to{' '}
              <Text style={{ fontWeight: 'bold' }}>Sign Up!</Text>
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ImageBackground>
  )
}

export default WelcomeScreen
