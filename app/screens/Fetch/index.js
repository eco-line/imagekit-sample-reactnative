import React from 'react';
import { View, Alert } from 'react-native';

import Text from '../../components/Text/';
import getStyleSheet from './styles';

function Main() {
	let styleSheet = getStyleSheet({});

	let textCssProps = {
		fontSize : 30
	}

	return (
		<>
			<View style={styleSheet.headContainer}>
				<Text cssProps={textCssProps}>Imagekit Second Screen</Text>
			</View>
		</>
	);
};

export default Main;
