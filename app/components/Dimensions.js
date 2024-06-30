import { useDeviceOrientation } from '@react-native-community/hooks';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';



const Dimension = () => {
	console.log(Dimensions.get('screen'));
	const dimensions = useWindowDimensions();
	console.log(dimensions);

	const orientation = useDeviceOrientation();
	console.log(orientation);

	return (
		<View style={{ ...styles.container, height: orientation === 'landscape' ? '100%' : '30%' }}>
		</View>
	);
};

export default Dimension;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'dodgerblue',
		width: '100%',
	}
});