import { StyleSheet, Switch, View } from 'react-native';
import React from 'react';
import { useState } from 'react';

const AppSwitch = () => {
	const [isNew, setIsNew] = useState(true);
	return (
		<View>
			<Switch
				value={isNew}
				onValueChange={newValue => setIsNew(newValue)}
			/>
		</View>
	);
};

export default AppSwitch;

const styles = StyleSheet.create({});