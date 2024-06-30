import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import MyButton from '../components/MyButton';

const WelcomeScreen = () => {
	return (
		<ImageBackground
			source={require('../assets/background.jpg')}
			style={styles.bg_img}
		>
			<View style={styles.logo_con}>
				<Image style={styles.image} source={require('../assets/logo-red.png')} />
				<Text style={styles.text}>
					sell what you don't need
				</Text>
			</View>
			<MyButton title="Login" onPress={() => console.log("Login btn")} />
			<MyButton title="Log out" color="secondary" onPress={() => console.log("Log out btn")} />
		</ImageBackground >
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	bg_img: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "flex-end",

	},
	logo_con: {
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "auto",

		// borderWidth: 2,
		// borderColor: "red",

	},
	image: {
		width: "40%",
		height: "40%",
		resizeMode: "contain",

		// borderWidth: 2,
		// borderColor: "blue",
	},
	text: {
		fontSize: 20,
		textTransform: "capitalize",
		marginTop: 20,

	}
});