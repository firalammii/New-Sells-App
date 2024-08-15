import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';

import colors from '../config/colors';
import { Swipeable } from 'react-native-gesture-handler';

const ProfileCard = ({
	style,
	img,
	imgSize = 60,
	ImageComponent,
	title,
	subTitle,
	onPress,
	renderRightAction,
}) => {
	const styles = StyleSheet.create({
		card: {
			width: "100%",
			// height: imgSize,
			padding: 15,
			backgroundColor: colors.white,
			flexDirection: "row",
			alignItems: "center",
			gap: 20,
			...style

		},
		item_img: {
			width: imgSize,
			height: imgSize,
			resizeMode: "contain",
			borderRadius: imgSize / 2,
		},
		text: {
			fontSize: 20,
			fontWeight: "600",
		},
		sub_title: {
			color: colors.gray,
			fontSize: 15,
		}
	});

	return (
		<Swipeable
			renderRightActions={renderRightAction}
		>
		<TouchableHighlight
			underlayColor={colors.medium}
			onPress={onPress}
			>
			<View style={styles.card}>
				{img ? <Image style={styles.item_img} source={img} /> : ImageComponent}
				<View>
					{title && <Text style={styles.text}>{title}</Text>}
					{subTitle && <Text style={[styles.text, styles.sub_title]}>{subTitle}</Text>}
				</View>
			</View>
		</TouchableHighlight>
		</Swipeable>
	);
};

export default ProfileCard;
