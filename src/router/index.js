import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash'
import Login from '../screens/Login'
import Home from '../screens/Home'
import ListBook from '../screens/ListBook'
import PdfView from '../screens/PdfView'

const Stack = createNativeStackNavigator()

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ListBook" component={ListBook} />
        <Stack.Screen name="PdfView" component={PdfView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
