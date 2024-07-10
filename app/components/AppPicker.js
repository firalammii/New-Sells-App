import { FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import df_styles from '../config/styles';
import ItemsListSeparator from './ItemsListSeparator';
import AppText from './AppText';
import MySafeScreen from '../screens/MySafeScreen';

const initData = [
	{ id: 1, value: "default", selected: true, },

];

const AppPicker = ({ title, options, icon }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [items, setItems] = useState(options || initData);

	const selectedItem = items.find(item => item.selected) || "Pick One";

	const handleSelection = (selectedItem) => {
		setItems(items.map(prevItem => prevItem.id === selectedItem.id ? { ...selectedItem, selected: true } : { ...prevItem, selected: false }));
		setIsOpen(false);
	};

	return (
		<MySafeScreen>
			<AppText style={{ marginVertical: 10, fontSize: 20, }}>{title}: {selectedItem.value}</AppText>
			<TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
				<View>
					<View style={styles.con}>
						<MaterialCommunityIcons name={icon.name} size={icon.size} color={icon.color} />
						<AppText style={styles.text}>{selectedItem.value}</AppText>
						{
							isOpen ?
								<MaterialCommunityIcons name="chevron-up" size={icon.size} color={icon.color} /> :
								<MaterialCommunityIcons name="chevron-down" size={icon.size} color={icon.color} />
						}
					</View>
					{/* {isOpen && <Options icon={icon} items={items} handleSelection={handleSelection} />} */}
					<Modal visible={isOpen} >
						<MySafeScreen>
							<FlatList
								data={items}
								keyExtractor={item => item.value}
								ItemSeparatorComponent={<ItemsListSeparator color={icon.color} />}
								renderItem={({ item }) =>
									<ModalListItem
										onPress={handleSelection}
										item={item}
										dotSize={icon.size / 2}
										dotColor={icon.color}
									/>
								}
							/>
						</MySafeScreen>
					</Modal>
				</View>
			</TouchableWithoutFeedback>
		</MySafeScreen>
	);
};


const Options = ({ icon, items, handleSelection }) => {
	return (
		<View style={{ position: "absolute", top: icon.size + 20, left: 0, backgroundColor: "white", zIndex: 999 }}>
			<FlatList
				data={items}
				keyExtractor={item => item.value}
				ItemSeparatorComponent={<ItemsListSeparator color={icon.color} />}
				renderItem={({ item }) =>
					<ModalListItem
						onPress={handleSelection}
						item={item}
						dotSize={icon.size / 2}
						dotColor={icon.color}
					/>
				}
			/>
		</View>
	);
};

const ModalListItem = ({ onPress, item, dotSize, dotColor }) => {
	return (
		<TouchableWithoutFeedback onPress={() => onPress(item)}>
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					padding: 10,
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<AppText style={{ fontSize: 20 }}>{item.value}</AppText>
				<View
					style={{
						width: dotSize,
						height: dotSize,
						backgroundColor: item.selected ? dotColor : "transparent",
						borderRadius: "50%",
						borderWidth: 1,
						borderColor: dotColor
					}}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default AppPicker;

const styles = StyleSheet.create({
	con: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		position: "relative",
		backgroundColor: df_styles.colors.white,
		borderWidth: 1,
		borderColor: "red",
		borderRadius: 25,
	},
	text: {
		padding: 10,
		flex: 1,
	}
});