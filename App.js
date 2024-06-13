import { useEffect, useState } from 'react';
import LoginScreen from './app/screens/LoginScreen';
import SplashScreen from './app/screens/SplashScreenView';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {

  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false)
    }, 3000)
  })

  return (
    <>
      {isShowSplash ? (
        // <Stack.Screen name="Splash" component={SplashScreen} />
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}