import React from 'react'
import { Text, TouchableHighlight } from 'react-native'

import { styles } from '../styles/buttonStyles'

type ButtonProps = {
	label: string
	double?: boolean
	triple?: boolean
	operation?: boolean
	onClick: (value: string) => void
}

export default (props: ButtonProps) => {
	const styleButton: any[] = [ styles.button ]
	if (props.double) {
		styleButton.push(styles.buttonDouble)
	}
	if (props.triple) {
		styleButton.push(styles.buttonTriple)
	}
	if (props.operation) {
		styleButton.push(styles.operationButton)
	}
	return (
		<TouchableHighlight onPress={() => props.onClick(props.label)}>
			<Text style={styleButton}>{props.label}</Text>
		</TouchableHighlight>
	)
}
