import { StyleSheet } from 'react-native';
import Home from './src/screens/Home';
import ViewNotes from './src/screens/ViewNotes';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ViewNotes" component={ViewNotes} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({});
