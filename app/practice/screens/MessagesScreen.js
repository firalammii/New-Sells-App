import { FlatList } from 'react-native';
import React from 'react';

import ItemSeparatorComp from "../../components/ItemSeparatorComp";
import colors from '../../config/colors';
import { items } from '../../config/data';
import Card from '../components/Card';


const MessagesScreen = () => {
	return (
		<FlatList
			data={items}
			keyExtractor={item => item.id}
			renderItem={({ item }) =>
			(<Card
				title={item.title}
				img={item.img}
				subTitle={item.subTitle}
			/>)
			}
			ItemSeparatorComponent={<ItemSeparatorComp color={colors.light} />}
		/>
	);
};

export default MessagesScreen;
