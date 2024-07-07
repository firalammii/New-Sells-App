import { StyleSheet, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Icon = ({
	icon_name = "menu",
	icon_color = "#fff",
	size = 30,
	bg_color = "#000"
}) => {
	const styles = StyleSheet.create({
		con: {
			width: size,
			height: size,
			borderRadius: size / 2,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: bg_color,
		}
	});

	return (
		<View style={styles.con}>
			<MaterialCommunityIcons name={icon_name} size={size * 0.625} color={icon_color} />
		</View>
	);
};

export default Icon;

