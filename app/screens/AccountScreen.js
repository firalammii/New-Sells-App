import { StyleSheet, View } from 'react-native';
import React from 'react';

import MySafeScreen from './MySafeScreen';
import ProfileCard from '../components/ProfileCard';
import Icon from '../components/Icon';

import colors from '../config/colors';

const AccountScreen = () => {
	return (
		<MySafeScreen>
			<View style={styles.container}>
				<ProfileCard title="Firomsa Bekele" imgSize={80} subTitle="firalammii@gmail.com" img={require("../assets/FIRA_2024.jpg")} />
				<View style={styles.menu}>
					<ProfileCard title="My Listings" ImageComponent={<Icon icon_name="email" size={50} icon_color={colors.white} bg_color={colors.primary} />} />
					<ProfileCard title="My Calls" ImageComponent={<Icon icon_name="phone" size={50} icon_color={colors.white} bg_color={colors.secondary} />} />
				</View>
				<View style={styles.menu}>
					<ProfileCard title="Log out" ImageComponent={<Icon icon_name="logout" size={50} icon_color={colors.white} bg_color={colors.gold} />} />
				</View>
			</View>
		</MySafeScreen>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	menu: {
		marginTop: 30,
	},
	logout: {
		marginTop: 20,
	}
});