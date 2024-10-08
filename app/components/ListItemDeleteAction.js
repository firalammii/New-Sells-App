import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const ListItemDeleteAction = ({ onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container} >
				<MaterialCommunityIcons name="trash-can" size={60} color={colors.white} />
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.danger,
		alignItems: "center",
		justifyContent: "center",
	}
});