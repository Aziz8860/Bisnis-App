import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {IconLocation, ButtonLaporan, UMKM1Square, Grafik} from '../../assets';
import {RFValue} from 'react-native-responsive-fontsize';

export default class GrafikPenjualan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      umkm: this.props.route.params.umkm,
    };
  }

  render() {
    const {umkm} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Image source={umkm.avatarImage} style={styles.image} />
          <View style={styles.titles}>
            <Text style={styles.namaUMKM}>{umkm.title}</Text>
            <Text style={styles.namaPemilik}>{umkm.owner}</Text>
            <View style={{flexDirection: 'row'}}>
              <IconLocation />
              <Text style={styles.location}>{umkm.city}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.tipeSertifikat}>Bersertifikat</Text>
              <Text style={styles.tipeExcellent}>Excellent UMKM</Text>
            </View>
          </View>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.buttonNonActive}>Tentang UMKM</Text>
          </TouchableOpacity>
          <Text style={{fontSize: RFValue(32), color: colors.grayLight, marginBottom: 2}}>
            |
          </Text>
          <Text style={styles.buttonActive}>Grafik Penjualan</Text>
        </View>
        <View style={styles.blueLine} />
        <View style={styles.content}>
          <Text style={styles.grafikText}>Grafik UMKM</Text>
          <Image source={Grafik} style={styles.gambarGrafik} />
          <TouchableOpacity>
            <Image source={ButtonLaporan} style={styles.buttonLaporan} />
          </TouchableOpacity>
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
  topBar: {
    borderBottomWidth: 1,
    borderColor: colors.grayLight,
    height: responsiveHeight(146),
    paddingVertical: responsiveHeight(16),
    paddingHorizontal: responsiveWidth(16),
    flexDirection: 'row',
  },
  image: {
    height: responsiveHeight(100),
    width: responsiveHeight(100),
    alignSelf: 'center',
  },
  titles: {
    marginLeft: responsiveWidth(16),
  },
  namaUMKM: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(14),
    color: colors.black,
  },
  namaPemilik: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.grayBold,
  },
  location: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.grayLight,
  },
  tipeSertifikat: {
    marginTop: responsiveHeight(4),
    marginRight: responsiveWidth(4),
    backgroundColor: colors.white,
    color: colors.green,
    borderColor: colors.grayLight,
    borderWidth: 0.5,
    fontSize: RFValue(12),
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 16,
  },
  tipeExcellent: {
    marginTop: responsiveHeight(4),
    backgroundColor: colors.gold,
    color: colors.white,
    fontSize: RFValue(12),
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 16,
  },
  menu: {
    backgroundColor: colors.grayCard,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.grayLight,
    height: responsiveHeight(72),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonActive: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(16),
    color: colors.black,
  },
  buttonNonActive: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(16),
    color: colors.grayLight,
  },
  blueLine: {
    backgroundColor: colors.blue500,
    marginTop: responsiveHeight(-2),
    height: 2,
    marginLeft: responsiveWidth(205),
    width: responsiveWidth(250),
    maxWidth: '51%',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: responsiveHeight(22),
    paddingHorizontal: responsiveWidth(22),
  },
  grafikText: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(14),
    color: colors.black,
  },
  gambarGrafik: {
    alignSelf: 'center',
    marginTop: responsiveHeight(6),
    height: responsiveHeight(400),
    width: responsiveWidth(290),
  },
  buttonLaporan: {
    alignSelf: 'center',
    marginTop: responsiveHeight(28),
    height: responsiveHeight(42),
    width: responsiveWidth(360),
  },
});
