import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FeedScreen } from 'screens/FeedScreen'
import { MessagesScreen } from 'screens/MessagesScreen'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  )
}

export { TabNavigator }
