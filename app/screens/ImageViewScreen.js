import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import colors from '../config/colors';
import chair from '../assets/chair.jpg';

const ImageViewScreen = () => {
	return (
		<View style={styles.container}>
			<View style={[styles.btn, styles.closeBtn]}>
				<MaterialCommunityIcons name="close" color="white" size={40} />
			</View>
			<View style={[styles.btn, styles.deleteBtn]}>
				<MaterialCommunityIcons name="delete" color="white" size={40} />
			</View>
			<Image
				resizeMode="contain"
				style={styles.image}
				source={chair}
			/>
		</View>
	);
};

export default ImageViewScreen;

const styles = StyleSheet.create({
	btn: {
		// width: '30%',
		// height: 40,
		borderRadius: 8,
		position: "absolute",
		top: 40,
	},
	container: {
		backgroundColor: colors.black,
		flex: 1,
	},
	closeBtn: {
		left: 30,
		backgroundColor: colors.primary
	},
	deleteBtn: {
		right: 30,
		backgroundColor: colors.secondary
	},
	image: {
		borderRadius: 10,
		width: '100%',
		height: '100%',
	},
	// imgCon: {
	// 	borderRadius: 8,
	// 	overflow: "hidden"
	// }
});