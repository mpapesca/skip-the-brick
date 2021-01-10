import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootDrawer from './src/nav/RootDrawer';
import LoadingScreen from './src/screens/LoadingScreen';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 5000);
  return (
    <NavigationContainer>
      { isLoading
        ? <LoadingScreen />
        : <RootDrawer />
      }
    </NavigationContainer>
  );
}
