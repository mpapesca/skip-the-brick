import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { THREE } from 'expo-three';

import RootDrawer from './src/nav/RootDrawer';
import LoadingScreen from './src/screens/LoadingScreen';

global.THREE = THREE;

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 3000);
  return (
    <NavigationContainer>
      { isLoading
        ? <LoadingScreen />
        : <RootDrawer />
      }
    </NavigationContainer>
  );
}
