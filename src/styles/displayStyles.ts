import { StyleSheet } from 'react-native'
import color from './colors'

export const styles = StyleSheet.create({
	display: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
		backgroundColor: color.displayBackgroundColor,
		alignItems: 'flex-end'
	},
	displayValue: {
		fontSize: 60,
		color: color.displayValueColor
	}
})
