import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import Card from '../../components/ItemCard';

import colors from '../../config/colors';
import { items } from '../../config/data';

const ItemListingScreen = () => {
	return (
		<ScrollView style={styles.card_con}>
			{
				items.map(item => <Card key={item.title} title={item.title} img={item.img} subTitle={item.subTitle} />)
			}
		</ScrollView>
	);
};

export default ItemListingScreen;

const styles = StyleSheet.create({
	card_con: {
		flex: 1,
		// flexDirection: "row",
		// overflow: "scroll",
		backgroundColor: colors.whiteSmoke,
		padding: 20,
		gap: 20,

	},
});