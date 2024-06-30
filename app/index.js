import { SafeAreaView, StyleSheet, Platform, StatusBar, } from "react-native";

import FlexBox from './components/FlexBox';
import Dimension from './components/Dimensions';
import MyButton from './components/MyButton';
import ItemListingScreen from './screens/ItemListingScreen';
import ImageViewScreen from './screens/ImageViewScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default function Index () {
  return (
    <SafeAreaView
      style={styles.container}
    >
      {/* flex, flexWrap, alignContent and alignItems */}
      {/* <FlexBox /> */}
      {/* dimensions */}
      {/* <Dimension /> */}

      <ImageViewScreen />
      {/* <WelcomeScreen /> */}

      {/* <ItemListingScreen /> */}




    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },

});