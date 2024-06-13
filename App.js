import { useEffect, useState } from 'react';
import LoginScreen from './app/screens/LoginScreen';
import SplashScreen from './app/screens/SplashScreenView';

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
        <SplashScreen />
      ) : (
        <LoginScreen />
      )}
    </>
  );
}