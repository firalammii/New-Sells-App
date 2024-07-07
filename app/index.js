import { SafeAreaView, StyleSheet, Platform, StatusBar, } from "react-native";

import FlexBox from './practice/components/FlexBox';
import Dimension from './practice/components/Dimensions';
import ItemListingScreen from './practice/screens/ItemListingScreen';
import MessagesScreen from './practice/screens/MessagesScreen';
import MyButton from './components/MyButton';
import ProfileCard from './components/ProfileCard';
import Icon from './components/Icon';
import AccountCard from './components/AccountCard';
import UsersListingScreen from './screens/UsersListingScreen';
import ImageViewScreen from './screens/ImageViewScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AccountScreen from './screens/AccountScreen';

import colors from "./config/colors";

export default function Index () {
  return (
    <SafeAreaView
      style={styles.container}
    >
      {/* flex, flexWrap, alignContent and alignItems */}
      {/* <FlexBox /> */}
      {/* dimensions */}
      {/* <Dimension /> */}


      {/* <ImageViewScreen /> */}
      {/* <WelcomeScreen /> */}
      {/* <ItemListingScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <UsersListingScreen /> */}
      <AccountScreen />




    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },

});