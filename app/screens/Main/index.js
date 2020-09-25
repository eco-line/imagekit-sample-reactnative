import React from 'react';
import { View, Alert } from 'react-native';

import Text from '../../components/Text/';
import Button from '../../components/Button/';
import getStyleSheet from './styles';

function Main({ navigation }) {
	let styleSheet = getStyleSheet({});

	let textCssProps = {
		fontSize : 30
	}
	let buttonCssProps = {
		width : 300
	}

	return (
		<>
			<View style={styleSheet.headContainer}>
				<Text cssProps={textCssProps}>Imagekit Demo</Text>
			</View>
			<View style={styleSheet.btnContainer}>
				<View style={styleSheet.btnView}>
					<Button 
						cssProps={buttonCssProps} 
						onPress={() => Alert.alert('Simple Button pressed1')}
					>
						Upload Image
					</Button>
				</View>
				<View style={styleSheet.btnView}>
					<Button 
						cssProps={buttonCssProps} 
						onPress={() => Alert.alert('Simple Button pressed2')}
					>
						Upload File
					</Button>
				</View>
				<View style={styleSheet.btnView}>
					<Button 
						cssProps={buttonCssProps} 
						onPress={() => navigation.navigate('Fetch')}
					>
						Fetch Images
					</Button>
				</View>
			</View>
		</>
	);
};

export default Main;
