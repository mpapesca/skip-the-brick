import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import GameScreen from '../screens/GameScreen';
import SettingsScreen from '../screens/SettingsScreen';


const Drawer = createDrawerNavigator();

export default function RootDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Game">
            <Drawer.Screen name="Game" component={GameScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}