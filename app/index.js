import { GestureHandlerRootView, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Platform, StatusBar, } from "react-native";

import FlexBox from './practice/components/FlexBox';
import Dimensions from './practice/components/Dimensions';
import FlatListdemo from './practice/components/FlatListdemo';
import ItemListingScreen from './practice/screens/ItemListingScreen';
import MessagesScreen from './practice/screens/MessagesScreen';
import ListItem from './practice/swipeable/ListItem';


import MyButton from './components/MyButton';
import ProfileCard from './components/ProfileCard';
import Icon from './components/Icon';
import AppTextInput from './components/AppTextInput';
import AppSwitch from './components/AppSwitch';
import AppPicker from './components/AppPicker';

import MySafeScreen from "./screens/MySafeScreen";
import UsersListingScreen from './screens/UsersListingScreen';
import ImageViewScreen from './screens/ImageViewScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AccountScreen from './screens/AccountScreen';
import ItemsListingScreen from './screens/ItemsListingScreen';
import FormScreen from './screens/FormScreen';

import colors from "./config/colors";
import df_styles from "./config/styles";

export default function Index () {
  return (
    <GestureHandlerRootView>

    <MySafeScreen>

      {/* flex, flexWrap, alignContent and alignItems */}
      {/* <FlexBox /> */}
        {/* <Dimensions /> */}
        {/* <MessagesScreen /> */}
        {/* <FlatListdemo /> */}
        {/* <ListItem /> */}


      {/* <ImageViewScreen /> */}
      {/* <WelcomeScreen /> */}
        {/* <ItemListingScreen /> */}
        {/* <UsersListingScreen /> */}
        <AccountScreen />


        {/* <AppTextInput placeholder="User Input" style={df_styles.text} icon={{ icon_name: "car", icon_color: colors.primary, size: 30 }} /> */}
        {/* <AppTextInput placeholder="User Input" /> */}
        {/* <AppSwitch />  */}

        {/* <AppPicker title={"Pick your fovorite hot"} options={[{ id: 1, value: "Tea", selected: true, }, { id: 2, value: "Ice Cream", selected: false, }, { id: 3, value: "Coffee", selected: false, },]} icon={{ name: "apps", color: colors.primary, size: 30 }} /> */}
      {/* <AppPicker title={"Pick your fovorite Softs"} options={[]} icon={{ name: "email", color: colors.primary, size: 30 }} /> */}

        {/* <FormScreen /> */}

    </MySafeScreen>
    </GestureHandlerRootView>

  );
}