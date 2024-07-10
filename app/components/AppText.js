import { Text } from 'react-native';
import React from 'react';

import df_styles from '../config/styles.js';

const AppText = ({ children, style }) => {
	return (
		<Text
			style={[df_styles.text, style]}
		>
			{children}
		</Text>
	);
};

export default AppText;
