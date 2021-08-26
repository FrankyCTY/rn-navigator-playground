/*
Root Stack Navigator
 */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from 'screens/HomeScreen'
import { ProfileScreen } from 'screens/ProfileScreen'
import { SettingsScreen } from 'screens/SettingsScreen'

const Stack = createStackNavigator()

const NestingNavigatorsOne = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { NestingNavigatorsOne }
