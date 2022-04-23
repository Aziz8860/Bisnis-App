import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {Jarak} from '../../components';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {
  IconLocation,
  ButtonProspektus,
} from '../../assets';
import {RFValue} from 'react-native-responsive-fontsize';

export default class UMKMDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      umkm: this.props.route.params.umkm,
    }
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
          <Text style={styles.buttonActive}>Tentang UMKM</Text>
          <Text style={{fontSize: RFValue(32), color: colors.grayLight, marginBottom: 2}}>
            |
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Grafik Penjualan', {umkm})}>
            <Text style={styles.buttonNonActive}>Grafik Penjualan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blueLine} />
        <ScrollView style={styles.content}>
          <Text style={styles.judulUsaha}>Deskripsi Usaha</Text>
          <Text style={styles.deskripsi}>
            {umkm.desc}
          </Text>
          <Text style={styles.fotoUsaha}>Foto Usaha</Text>
          <View style={{flexDirection: 'row'}}>
            <Image source={umkm.image} style={styles.fotoUMKM} />
            <Image source={umkm.image2} style={styles.fotoUMKM} />
          </View>
          <Text style={[styles.fotoUsaha, {marginTop: responsiveHeight(22)}]}>
            Produk yang Dijual
          </Text>
          <Text>{'\u2022'} {umkm.product1}</Text>
          <Text>{'\u2022'} {umkm.product2}</Text>
          <Text>{'\u2022'} {umkm.product3}</Text>
          <TouchableOpacity>
            <Image source={ButtonProspektus} style={styles.buttonDownload} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Danai UMKM', {umkm})}>
            <Text style={styles.danaiText}>Danai UMKM</Text>
          </TouchableOpacity>
          <Jarak height={responsiveHeight(60)} />
        </ScrollView>
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
    width: responsiveWidth(250),
    maxWidth: '49%',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: responsiveHeight(22),
    paddingHorizontal: responsiveWidth(22),
  },
  judulUsaha: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(14),
    color: colors.black,
  },
  deskripsi: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.grayBold,
    textAlign: 'justify',
  },
  fotoUsaha: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(14),
    color: colors.black,
    marginTop: responsiveHeight(14),
  },
  fotoUMKM: {
    height: responsiveHeight(140),
    width: responsiveWidth(160),
    marginRight: responsiveWidth(20),
    marginTop: responsiveHeight(8),
    borderRadius: 4,
  },
  button: {
    backgroundColor: colors.blue600,
    height: responsiveHeight(58),
    width: responsiveWidth(380),
    marginTop: responsiveHeight(28),
    borderRadius: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDownload: {
    alignSelf: 'center',
    height: responsiveHeight(42),
    width: responsiveWidth(360),
    marginTop: responsiveHeight(24),
  },
  danaiText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(16),
    color: colors.white,
  },
});
