import { StyleSheet, View } from 'react-native';
import React from 'react';

import colors from '../config/colors';
import Card from '../components/Card';

const ItemListingScreen = () => {
	return (
		<View style={styles.card_con}>
			<Card title="Red Jacket for sale" img={require("../assets/jacket.jpg")} subTitle={100} />
			<Card title="Couch in great condition" img={require("../assets/couch.jpg")} subTitle={500} />
		</View>
	);
};

export default ItemListingScreen;

const styles = StyleSheet.create({
	card_con: {
		flex: 1,
		backgroundColor: colors.whiteSmoke,
		padding: 20,
		gap: 20,

	},
});