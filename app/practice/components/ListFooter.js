import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '@/app/config/colors';

const ListFooter = ({ text }) => {
	return (
		<View style={styles.con}>
			<Text style={styles.txt} >{text}</Text>
		</View>
	);
};

export default ListFooter;

const styles = StyleSheet.create({
	con: {
		borderWidth: 1,
		borderColor: colors.secondary,
	},
	txt: {
		fontSize: 14,
		fontStyle: 'italic',
		padding: 3,
		textAlign: 'right',
		backgroundColor: colors.gray,
		color: colors.white
	}
});