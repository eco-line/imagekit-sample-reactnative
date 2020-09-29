import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './screens/Main/';
import Fetch from './screens/Fetch/';

const Stack = createStackNavigator();

function AppComponent() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Main}
			/>
			<Stack.Screen 
				name="Fetch Images" 
				component={Fetch} 
			/>
		</Stack.Navigator>
	);
};

export default AppComponent;
