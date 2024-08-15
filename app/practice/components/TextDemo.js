import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '@/app/config/colors';

const TextDemo = ({ text, ...oStyles }) => {
	return (
		<View style={styles.con}>
			<Text style={[styles.txt, { ...oStyles }]}>{text}</Text>
		</View>
	);
};

export default TextDemo;

const styles = StyleSheet.create({
	con: {
		borderWidth: 1,
		borderColor: colors.secondary,
	},
	txt: {
		fontSize: 24,
		fontWeight: 'bold',
		fontStyle: 'italic',
		padding: 3,
	}
});