import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Verifikasi1 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.judul}>
          Lengkapi Data Anda untuk Memulai Pendanaan
        </Text>
        <Text style={styles.subjudul}>
          Lengkapi data yang dibutuhkan dan mulai sekarang juga!
        </Text>
        <View style={styles.numberText}>
          <View style={styles.numberCircle}>
            <Text style={styles.number}>1</Text>
          </View>
          <Text style={styles.item}>Foto KTP</Text>
        </View>
        <View style={styles.numberText}>
          <View style={styles.numberCircle}>
            <Text style={styles.number}>2</Text>
          </View>
          <Text style={styles.item}>Foto Selfie</Text>
        </View>
        <View style={styles.numberText}>
          <View style={styles.numberCircle}>
            <Text style={styles.number}>3</Text>
          </View>
          <Text style={styles.item}>Nomor HP Aktif</Text>
        </View>
        <View style={styles.numberText}>
          <View style={styles.numberCircle}>
            <Text style={styles.number}>4</Text>
          </View>
          <Text style={styles.item}>Informasi Alamat Lengkap (sesuai KTP)</Text>
        </View>
        <View style={styles.numberText}>
          <View style={styles.numberCircle}>
            <Text style={styles.number}>5</Text>
          </View>
          <Text style={styles.item}>Tanggal Lahir (sesuai KTP)</Text>
        </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Verifikasi2')}>
          <View style={styles.button}>
          <Text style={styles.buttonText}>Lengkapi Data</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: responsiveHeight(80),
    paddingHorizontal: responsiveWidth(22),
  },
  judul: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(20),
    color: colors.black,
  },
  subjudul: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(14),
    color: colors.grayBold,
    marginBottom: responsiveHeight(12)
  },
  numberText: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: responsiveHeight(12)
  },
  numberCircle: {
    height: responsiveHeight(36),
    width: responsiveHeight(36),
    borderRadius: responsiveHeight(18),
    backgroundColor: colors.blue600,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: responsiveWidth(6),
  },
  number: {
    fontFamily: fonts.primary.semiBold,
    color: colors.white,
  },
  item: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(16),
    color: colors.grayBold,
  },
  button: {
    backgroundColor: colors.blue600,
    height: responsiveHeight(58),
    width: responsiveWidth(350),
    borderRadius: 4,
    marginTop: responsiveHeight(220),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(16),
    color: colors.white
  }
});
