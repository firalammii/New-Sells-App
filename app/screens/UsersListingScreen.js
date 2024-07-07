import { FlatList } from 'react-native';
import React, { useState } from 'react';

import ItemSeparatorComp from "../components/ItemSeparatorComp";
import colors from '../config/colors';
import ProfileCard from '../components/ProfileCard';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

import { initMsgs } from '../config/data';

const UsersListingScreen = () => {
	const [messages, setMessages] = useState(initMsgs);
	const [refresh, setRefresh] = useState(false);

	const handleDelete = index => {
		const items = [...messages];
		items.splice(index, 1);
		setMessages(items);
	};
	return (
		<FlatList
			data={messages}
			keyExtractor={item => item.id}
			renderItem={({ item, index }) =>
			(<ProfileCard
				title={item.title}
				img={item.img}
				subTitle={item.subTitle}
				onPress={() => handleDelete(index)}
				renderRightActions={() => <ListItemDeleteAction onPress={() => console.log("Delete Action")} />}
			/>)
			}
			ItemSeparatorComponent={<ItemSeparatorComp color={colors.light} />}
			refreshing={refresh}
			onRefresh={() => setMessages(initMsgs)}
		/>

	);
};

export default UsersListingScreen;
