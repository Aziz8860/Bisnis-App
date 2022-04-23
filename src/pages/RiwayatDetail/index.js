import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {Ceklis, IconLocationBlack} from '../../assets';
import {RFValue} from 'react-native-responsive-fontsize';

export default class RiwayatDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      riwayat: this.props.route.params.riwayat,
      image: this.props.route.params.riwayat.image,
    };
  }

  render() {
    const {riwayat, image} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.blueBackground} />
        <View style={styles.square}>
          <Text style={styles.money}>
            <Text style={styles.rp}>- Rp</Text> {riwayat.money}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image source={Ceklis} style={styles.iconCeklis} />
            <Text style={styles.success}>Sukses</Text>
          </View>
          <Text style={styles.date}>Waktu Transaksi: {riwayat.date}</Text>
        </View>
        <View style={styles.bagianBawah}>
          <View style={styles.barisText}>
            <Text style={styles.judul}>Nama Usaha</Text>
            <Image source={riwayat.image} style={styles.image}/>
            <Text style={styles.identitas}>{riwayat.title}</Text>
          </View>
          <View style={styles.barisText}>
            <Text style={styles.judul}>Pemilik</Text>
            <Text style={styles.identitas}>{riwayat.name}</Text>
          </View>
          <View style={styles.barisText}>
            <Text style={styles.judul}>Lokasi</Text>
            <Image source={IconLocationBlack} style={styles.location}/>
            <Text style={styles.identitas}>{riwayat.city}</Text>
          </View>
          <View style={styles.gap} />
          <View style={styles.barisText}>
            <Text style={styles.judul}>ID Transaksi</Text>
            <Text style={styles.identitas}>{riwayat.transactionID}</Text>
          </View>
          <View style={styles.barisText}>
            <Text style={styles.judul}>ID Referensi</Text>
            <Text style={styles.identitas}>{riwayat.referenceID}</Text>
          </View>
          <View style={styles.backgroundBawah} />
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
  blueBackground: {
    backgroundColor: colors.blue600,
    opacity: 0.6,
    height: responsiveHeight(135),
    maxWidth: '100%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  square: {
    backgroundColor: colors.white,
    height: responsiveHeight(180),
    width: responsiveWidth(370),
    alignSelf: 'center',
    marginTop: responsiveHeight(-100),
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rp: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(16),
    color: colors.black,
  },
  money: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(22),
    color: colors.black,
  },
  iconCeklis: {
    height: responsiveHeight(20),
    width: responsiveHeight(20),
    marginVertical: responsiveHeight(5),
    marginRight: responsiveWidth(6),
  },
  success: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(16),
    color: '#00B14F',
  },
  date: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.grayBold,
    marginTop: responsiveHeight(10),
  },
  bagianBawah: {
    flex: 1,
    marginTop: responsiveHeight(24),
  },
  barisText: {
    borderColor: colors.grayCard,
    borderBottomWidth: 2,
    height: responsiveHeight(56),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center'
  },
  judul: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(12),
    color: colors.grayBold
  },
  image: {
    width: responsiveHeight(36),
    height: responsiveHeight(36),
    marginLeft: responsiveHeight(168)
  },
  identitas: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(12),
    color: colors.black
  },
  location: {
    marginLeft: responsiveHeight(230)
  },
  gap: {
    backgroundColor: colors.grayCard,
    height: responsiveHeight(12),
  },
  backgroundBawah: {
    backgroundColor: colors.grayCard,
    flex: 1,
  },
});
