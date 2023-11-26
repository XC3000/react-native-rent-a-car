import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import HomeScreen from './src/screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Info from './src/screens/Info';
import Map from './src/screens/Map';
import Saved from './src/screens/Saved';
import Setting from './src/screens/Setting';
import {Image, StyleSheet} from 'react-native';

const homeIcon_active = require('./src/assets/icons/home-active.png');
const homeIcon = require('./src/assets/icons/home.png');
const compass_active = require('./src/assets/icons/compass-active.png');
const compass = require('./src/assets/icons/compass.png');
const savedIcon_active = require('./src/assets/icons/saved-active.png');
const savedIcon = require('./src/assets/icons/saved.png');
const settingsIcon_active = require('./src/assets/icons/settings-active.png');
const settingsIcon = require('./src/assets/icons/settings.png');

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({}) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? homeIcon_active : homeIcon;
            } else if (route.name === 'Map') {
              iconName = focused ? compass_active : compass;
            } else if (route.name === 'Saved') {
              iconName = focused ? savedIcon_active : savedIcon;
            } else if (route.name === 'Settings') {
              iconName = focused ? settingsIcon_active : settingsIcon;
            }

            return (
              <Image
                source={iconName}
                resizeMode="contain"
                style={styles.footerIcon}
              />
            );
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            padding: 10,
            backgroundColor: 'black',
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
          },
        })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Saved" component={Saved} />
        <Tab.Screen name="Settings" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIcon: {
    width: 25,
  },
});

export default App;
