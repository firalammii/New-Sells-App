import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import colors from '@/app/config/colors';
const MyButton = ({ title, onPress, color, style }) => {
	return (
		<TouchableOpacity style={{ ...styles.btn, backgroundColor: color ? colors[color] : colors.primary, ...style }} onPress={onPress}>
			<Text style={[styles.text, { color: colors.white }]}>{title}</Text>
		</TouchableOpacity>
	);
};

export default MyButton;

const styles = StyleSheet.create({
	btn: {
		width: "100%",
		paddingVertical: 18,
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		fontWeight: '600',
	}
});