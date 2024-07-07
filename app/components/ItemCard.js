import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import colors from '../config/colors';

const ItemCard = ({ img, title, subTitle }) => {
	return (
		<View style={styles.card}>
			<Image style={styles.item_img} source={img} />
			<View style={styles.text_con}>
				<Text style={styles.text} >{title}</Text>
				<Text style={[styles.text, styles.sub_title]}>{subTitle}</Text>
			</View>
		</View>
	);
};

export default ItemCard;

const styles = StyleSheet.create({
	card: {
		paddingBottom: 10,
		borderRadius: 15,
		backgroundColor: colors.white,
		flexDirection: "column",
		overflow: "hidden",
	},
	item_img: {
		width: "100%",
		height: 300,
	},
	text_con: {
		marginTop: 10,
	},
	text: {
		fontSize: 20,
		fontWeight: "600",
		paddingLeft: 5,
	},
	sub_title: {
		color: colors.secondary,
	}
});