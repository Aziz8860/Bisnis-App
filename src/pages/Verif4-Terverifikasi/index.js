import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {Ceklis} from '../../assets';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Verifikasi4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={Ceklis} style={styles.image} />
        <Text style={styles.name}>Hi, Adi</Text>
        <Text style={styles.desc}>
          Akun kamu telah sukses diverifikasi. Nikmati layanan BisnisKita
          sekarang juga!
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Lanjut</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  image: {
    marginTop: responsiveHeight(76),
  },
  name: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(20),
    color: colors.black,
    marginTop: responsiveHeight(16)
  },
  desc: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(14),
    color: colors.black,
    marginHorizontal: responsiveWidth(28),
    marginTop: responsiveHeight(16),
    justifyContent: 'center',
    textAlign: 'center'
  },
  button: {
    backgroundColor: colors.blue600,
    height: responsiveHeight(58),
    width: responsiveWidth(150),
    marginTop: responsiveHeight(72),
    borderRadius: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(16),
    color: colors.white,
  },
});
