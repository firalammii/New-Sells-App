import { View } from 'react-native';
import React from 'react';

const ItemSeparatorComp = ({ color }) => {
	return (
		<View style={{
			width: "100%",
			height: 1,
			backgroundColor: color,
		}}>
		</View>
	);
};

export default ItemSeparatorComp;