import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import Logo from '../../assets/logo.svg'
import SharkTecLogo from '../../assets/SharkTecLogo.svg'

const SplashScreenView = () => {
  return (
    <View style={styles.container}>
        <View>
            {/* <Image source={Logo} /> */}
            <Logo width={135.1} height={104.68} />
        </View>
        <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Feito Por</Text>
            {/* <Image source={SharkTecLogo} /> */}
            <SharkTecLogo width={148} height={39.73} />
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
        fontWeight: '500',
        color: '#2E2E2E',
    },
})