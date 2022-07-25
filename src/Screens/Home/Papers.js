import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import NavigationConstants from '../../constants/NavigationConstants';
import AppStyle from '../../styles/AppStyle';
const Papers = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    col: {
      flex: 0,
      flexDirection: 'row',
    },
    label: {
      backgroundColor: '#ff0066',
      padding: 6,
      paddingHorizontal: 50,
      fontSize: 50,
      borderRadius: 4,
      color: 'white',
    },
    pp_btn: {
      fontSize: 24,
      padding: 8,
      paddingHorizontal: 28,
      color: 'white',
    },

    pp_btn_bg_clr_blue: {
      backgroundColor: '#4dc7ff',
    },

    pp_btn_bg_clr_grn: {
      backgroundColor: '#4dffa3',
      paddingHorizontal: 30,
    },
  });
  return (
    <View style={[styles.container, AppStyle.appScreen]}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View style={{marginTop: 100}}>
        <Text style={styles.label}>A'Level</Text>
        <View style={styles.col}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationConstants.A_LEVEL.SUBJECT)
            }>
            <Text style={[styles.pp_btn, styles.pp_btn_bg_clr_blue]}>
              Yearly
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Alert.alert('TouchableOpacity with adjusted color pressed')
            }>
            <Text style={[styles.pp_btn, styles.pp_btn_bg_clr_grn]}>
              Topical
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginBottom: 150}}>
        <Text style={styles.label}>O'Level</Text>
        <View style={styles.col}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationConstants.O_LEVEL.SUBJECT)
            }>
            <Text style={[styles.pp_btn, styles.pp_btn_bg_clr_blue]}>
              Yearly
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationConstants.O_LEVEL.SUBJECT_TOPICAL)
            }>
            <Text style={[styles.pp_btn, styles.pp_btn_bg_clr_grn]}>
              Topical
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Papers;
