import { StyleSheet, Dimensions } from 'react-native'
import color from './colors'

export const styles = StyleSheet.create({
	button: {
		fontSize: 40,
		width: Dimensions.get('window').width / 4,
		height: Dimensions.get('window').width / 4,
		padding: 20,
		color: color.buttonColor,
		backgroundColor: color.buttonBackgroundColor,
		textAlign: 'center',
		borderWidth: 1,
		borderColor: color.buttonBorderColor
	},
	operationButton: {
		color: '#FFF',
		backgroundColor: color.buttonOperationBackgroundColor
	},
	buttonDouble: {
		width: Dimensions.get('window').width / 4 * 2
	},
	buttonTriple: {
		width: Dimensions.get('window').width / 4 * 3
	}
})
