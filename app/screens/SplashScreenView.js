import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import Logo from '../../assets/logo.png'
import SharkTecLogo from '../../assets/SharkTecLogo.png'

const SplashScreenView = () => {
  return (
    <View style={styles.container}>
        <View>
            <Image source={Logo} />
        </View>
        <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Feito Por</Text>
            <Image source={SharkTecLogo} />
        </View>
    </View>
  )
}

export default SplashScreenView

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        position: 'relative',
    },

    bottomContainer: {
        position: 'absolute',
        bottom: '8%',
        alignItems: 'center',
    },

    bottomText: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: '500'
    },
})