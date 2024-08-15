import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { initMsgs, goods } from '@/app/config/data';
import ItemCard from '@/app/components/ItemCard';
import PressableDemo from './PressableDemo';
import TextDemo from './TextDemo';
import ListFooter from './ListFooter';

const FlatListdemo = () => {
	const [goodsSate, setGoodsState] = useState(goods);
	const [refresh, setRefresh] = useState(false);

	const deleteItem = (id) => {
		setGoodsState(goodsSate.filter(gs => gs.id !== id));
	};
	return (
		<View
		// style={{ flex: 1 }}
		>
			<FlatList
				data={goodsSate}
				renderItem={(args) => <PressableDemo onPress={() => deleteItem(args.item.id)}><TextDemo text={args.item.name} /></PressableDemo>}

				// initialNumToRender={10}
				// horizontal
				// numColumns={6}
				refreshing={refresh}
				onRefresh={() => setGoodsState(goods)}
				ListHeaderComponent={<TextDemo text="List of Goods" />}
				ListFooterComponent={<ListFooter text='Footer of Goods' />}
			/>
			{/* <FlatList
				data={initMsgs}
				renderItem={({ item }) => <ItemCard img={item.img} title={item.title} subTitle={item.subTitle} />}
			/> */}
		</View>
	);
};

export default FlatListdemo;

const styles = StyleSheet.create({});