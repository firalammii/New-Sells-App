import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const Card = ({ img, title, subTitle }) => {
	return (
		<View style={styles.card}>
			<Image style={styles.item_img} source={img} />
			<Text style={styles.text} >{title}</Text>
			{/* <Text style={{ ...styles.text, ...styles.sub_title }}>$ {subTitle}</Text> */}
			<Text style={[styles.text, styles.sub_title]}>$ {subTitle}</Text>
		</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	card: {
		width: "100%",
		// height: 200,
		paddingBottom: 20,
		backgroundColor: colors.white,
		borderRadius: 15,
		overflow: "hidden",


		// borderWidth: 2,
		// borderColor: colors.black,
	},
	item_img: {
		width: "100%",
		height: 300,
		// resizeMode: "cover",
	},
	text: {
		fontSize: 20,
		fontWeight: "600",
		paddingLeft: 5,
		marginTop: 8,
	},
	sub_title: {
		color: colors.secondary,
	}
});