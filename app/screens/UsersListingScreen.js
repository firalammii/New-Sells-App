import { FlatList } from 'react-native';
import React, { useState } from 'react';

import ItemSeparatorComp from "../components/ItemsListSeparator";
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
				subTitle={item.subTitle}
				img={item.img}
				onPress={() => console.log("item pressed: ")}
				renderRightAction={() => (<ListItemDeleteAction onPress={() => handleDelete(index)} />)}
			/>)}
			ItemSeparatorComponent={<ItemSeparatorComp color={colors.light} />}
			refreshing={refresh}
			onRefresh={() => setMessages(initMsgs)}
		/>

	);
};

export default UsersListingScreen;
