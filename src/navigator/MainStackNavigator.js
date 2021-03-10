import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import FavoriteScreen from '../Screens/FavoriteScreen/FavoriteScreen';

const Stack = createStackNavigator();

const MainStackNavigator=()=>{
return (
    <Stack.Navigator initialRouteName="home" >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="favorite" component={FavoriteScreen} />
    </Stack.Navigator>

    
);
}


export default MainStackNavigator