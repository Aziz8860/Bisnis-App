import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {EmptyNotification} from '../../assets';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Notification extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageAndText}>
          <EmptyNotification />
          <Text style={styles.notificationText}>Anda tidak memiliki notifikasi</Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageAndText: {
    alignSelf: 'center',
    marginTop: responsiveHeight(100)
  },
  notificationText: {
      textAlign: 'center',
      marginTop: responsiveHeight(-55),
      fontFamily: fonts.primary.regular,
      fontSize: RFValue(14),
  }
});
