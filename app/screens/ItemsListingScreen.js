import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import MySafeScreen from './MySafeScreen';

import { items } from '../config/data';
import colors from '../config/colors';
import ItemCard from '../components/ItemCard';


const ItemsListingScreen = () => {
	return (
		<MySafeScreen>

			<FlatList
				style={styles.items}
				data={items}
				keyExtractor={item => item.id}
				ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
				renderItem={({ item }) => (
					<ItemCard
						title={item.title}
						img={item.img}
						subTitle={item.subTitle}
					/>
				)}
			/>
		</MySafeScreen>
	);
};

export default ItemsListingScreen;

const styles = StyleSheet.create({
	items: {
		padding: 10,
	}
});