import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {CardRiwayat, HeaderWithFilter} from '../../components';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {riwayatPendanaan} from '../../data';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Riwayat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      riwayats: riwayatPendanaan,
    };
  }

  render() {
    const {riwayats, index} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <HeaderWithFilter />
        <View style={styles.content}>
          <Text style={styles.riwayatText}>Riwayat Pendanaan</Text>
          {riwayats.map(riwayat => {
            return (
              <CardRiwayat
                riwayat={riwayat}
                key={riwayat.id}
                navigation={navigation}
              />
            );
          })}
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
  content: {
    paddingTop: responsiveHeight(28),
    paddingHorizontal: responsiveWidth(24),
  },
  riwayatText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(16),
    color: colors.black,
  },
});
