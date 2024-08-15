import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';

import MySafeScreen from './MySafeScreen';
import ProfileCard from '../components/ProfileCard';
import Icon from '../components/Icon';

import colors from '../config/colors';
import { menuItems } from '../config/data';
import ItemSeparatorComp from '../components/ItemsListSeparator';

const AccountScreen = () => {
	return (
		<MySafeScreen>
			<View style={styles.container}>
				<View style={styles.header}>
					<ProfileCard
						title="Firomsa Bekele"
						subTitle="firalammii@gmail.com"
						img={require("../assets/FIRA_2024.jpg")}
						imgSize={80}
					/>
				</View>
				<View style={styles.menu}>
					<FlatList
						data={menuItems}
						keyExtractor={menuItem => menuItem.title}
						ItemSeparatorComponent={<ItemSeparatorComp color={colors.light} />}
						renderItem={({ item }) => (
							<ProfileCard
								title={item.title}
								ImageComponent={
									<Icon
										size={50}
										icon_name={item.icon.icon_name}
										icon_color={item.icon.icon_color}
										bg_color={item.icon.bg_color}
									/>
								}
							/>
						)}
					/>
				</View>
				<ProfileCard
					title={"Log Out"}
					ImageComponent={
						<Icon
							size={50}
							icon_name={"logout"}
							icon_color={colors.white}
							bg_color={colors.gold}
						/>
					}
				/>
			</View>
		</MySafeScreen>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.light,

		// borderWidth: 1,
		// borderColor: 'red'

	},
	header: {
		marginBottom: 30,
	},
	menu: {
		marginBottom: 20,
	},
	// logout: {
	// 	// marginTop: 20,
	// }
});