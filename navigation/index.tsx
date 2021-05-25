/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import {RootStackParamList} from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import EcoCitiesScreen from "../screens/EcoCitiesScreen";
import EcoVehicleScreen from "../screens/EcoVehicleScreen";
import SavingEnvironmentScreen from "../screens/SavingEnvironmentScreen";
import Achievements from "../screens/Achievements";

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={BottomTabNavigator}/>
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
            <Stack.Screen name="EcoCitiesScreen" component={EcoCitiesScreen} />
            <Stack.Screen name="EcoVehicleScreen" component={EcoVehicleScreen} />
            <Stack.Screen name="SavingEnvironmentScreen" component={SavingEnvironmentScreen} />
            <Stack.Screen name="Achievements" component={Achievements} />
        </Stack.Navigator>
    );
}
