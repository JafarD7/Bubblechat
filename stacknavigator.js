import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/homescreen';
import Signupscreen from './screens/signupscreen';
import Loginscreen from './screens/loginscreen';


const stacknavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Homescreen} options={{ headerShown: false }} />
                <Stack.Screen name="Signupscreen" component={Signupscreen} options={{ headerShown: false }} />
                <Stack.Screen name="Loginscreen" component={Loginscreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default stacknavigator

const styles = StyleSheet.create({})