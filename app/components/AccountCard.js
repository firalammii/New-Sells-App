import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Icon from './Icon';
import colors from '../config/colors';

const AccountCard = ({
	label = "My Listings",
	icon_name, size, icon_color, bg_color }) => {
	return (
		<View style={styles.con}>
			<Icon name={icon_name} size={size} icon_color={icon_color} bg_color={bg_color} />
			<Text style={styles.text}>{label}</Text>
		</View>
	);
};

export default AccountCard;

const styles = StyleSheet.create({
	con: {
		width: "100%",
		alignItems: "center",
		flexDirection: "row",
		gap: 10,
		paddingLeft: 10,
		padding: 10,
		marginTop: 5,
		marginBottom: 5,
		backgroundColor: colors.white,
	},
	text: {
		fontSize: 20,
		fontWeight: "bold"
	}
});