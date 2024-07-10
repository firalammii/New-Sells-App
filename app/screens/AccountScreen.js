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
				<ProfileCard
					title="Firomsa Bekele"
					subTitle="firalammii@gmail.com"
					img={require("../assets/FIRA_2024.jpg")}
					imgSize={80}
				/>
				<FlatList
					style={styles.menu}
					data={menuItems}
					keyExtractor={menuItem => menuItem.title}
					ItemSeparatorComponent={ItemSeparatorComp}
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
				<View style={styles.menu}>
					<ProfileCard
						title="Log out"
						ImageComponent={
							<Icon
								icon_name="logout"
								size={50}
								icon_color={colors.white}
								bg_color={colors.gold}
							/>
						}
					/>
				</View>
			</View>
		</MySafeScreen>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light
	},
	menu: {
		marginTop: 30,
	},
	logout: {
		marginTop: 20,
	}
});