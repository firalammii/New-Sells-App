import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import colors from '../config/colors';
import MyButton from '../components/MyButton';

const WelcomeScreen = () => {
	return (
		<ImageBackground
			source={require('../assets/background.jpg')}
			style={styles.imgCon}
			resizeMode="cover"
		>/
			<MyButton title={"Login"} />
			<MyButton title={"Log out"} color={"secondary"} />
		</ImageBackground >
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	imgCon: {
		flex: 1,
		justifyContent: "flex-end"

	}
});