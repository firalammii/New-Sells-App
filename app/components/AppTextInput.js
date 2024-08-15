import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AppTextInput = ({
	name,
	icon,
	changeHandler,
	style,
	...otherProps
}) => {

	const styles = StyleSheet.create({
		con: {
			width: "100%",
			flexDirection: "row",
			alignItems: "center",
			paddingHorizontal: 10,
			paddingVertical: 5,

			backgroundColor: colors.light,
			borderRadius: icon?.size ? icon.size + 45 : 45,
			borderWidth: 1,
			borderColor: colors.primary,
		},
		textInput: {
			flex: 1,
			fontSize: 20,
			padding: 10,
			// paddingLeft: 15,
			backgroundColor: colors.light,
			// borderWidth: 1,
			// borderColor: "red",

		}
	});
	return (
		<View style={styles.con}>
			{icon && <MaterialCommunityIcons name={icon.icon_name} size={icon.size} color={icon.icon_color} />}
			<TextInput
				style={[styles.textInput, style]}
				clearButtonMode="while-editing"
				{...otherProps}
				onChangeText={newValue => changeHandler(name, newValue)}
			/>
		</View>
	);
};

export default AppTextInput;