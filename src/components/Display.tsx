import React from 'react'
import { View, Text } from 'react-native'

import { styles } from '../styles/displayStyles'

type DisplayProps = {
	value: string
}

export default (props: DisplayProps) => (
	<View style={styles.display}>
		<Text style={styles.displayValue} numberOfLines={1}>
			{props.value}
		</Text>
	</View>
)
