import { Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import colors from '../config/colors';

const MyButton = ({ title, onPress, color }) => {
	return (
		<Pressable style={{ ...styles.btn, backgroundColor: color ? colors[color] : colors.primary }}>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	);
};

export default MyButton;

const styles = StyleSheet.create({
	btn: {
		paddingVertical: 18,
		borderRadius: 20,
		margin: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: colors.white,
		fontSize: 20,
		fontWeight: '600',
	}
});