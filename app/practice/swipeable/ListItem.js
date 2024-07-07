import { StyleSheet, Text, View, Animated } from 'react-native';
import React from 'react';
import { Swipeable } from 'react-native-gesture-handler';

const ListItem = () => {
	const swipeItem = () => {
		return (
			<View style={{ width: 100, height: 80 }}>
				<Text>Delete</Text>
			</View>);
	};
	return (
		<Swipeable
			style={styles.con}
			renderRightActions={swipeItem}
		>
			<Text>ListItem</Text>
		</Swipeable>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	con: {
		width: "100%",
		height: 80,
	}
});