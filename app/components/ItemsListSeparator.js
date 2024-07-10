import { View } from 'react-native';
import React from 'react';

const ItemsListSeparator = ({ color = "grey", thickness = 1 }) => {
	return (
		<View style={{
			width: "100%",
			height: thickness,
			backgroundColor: color,
		}}>
		</View>
	);
};

export default ItemsListSeparator;