import { StyleSheet} from 'react-native';

function getStyleSheet(cssProps){
	return StyleSheet.create({
		headContainer : {
			flex : 1,
			alignItems : 'center',
			justifyContent : 'center'
		},
		btnContainer : {
			flex : 4,
			alignItems : 'center',
			justifyContent : 'flex-start'
		},
		btnView : {
			marginTop : 10,
			marginBottom : 10
		}
	})
}

export default getStyleSheet;