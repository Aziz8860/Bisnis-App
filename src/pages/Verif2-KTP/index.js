import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {ContohKTP, KTPIllustration} from '../../assets';

export default class Verifikasi2 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <KTPIllustration />
        </View>

        <Text style={styles.desc}>
          Pastikan{' '}
          <Text style={{fontFamily: fonts.primary.semiBold}}>e-KTP/KTP</Text>{' '}
          masih berlaku dan{' '}
          <Text style={{fontFamily: fonts.primary.semiBold}}>
            terfoto dengan jelas.
          </Text>{' '}
          Cek kembalI, pastikan data yang tercantum benar.
        </Text>
        <Text style={styles.contoh}>Contoh Foto KTP</Text>
        <Image source={ContohKTP} style={styles.gambarKTP} />
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('Verifikasi3')}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Unggah Foto</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    alignItems: 'center',
    marginTop: responsiveHeight(52),
  },
  desc: {
    fontFamily: fonts.primary.regular,
    color: colors.black,
    fontSize: RFValue(14),
    marginHorizontal: responsiveWidth(40),
    marginTop: responsiveHeight(60),
  },
  contoh: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: RFValue(16),
    marginHorizontal: responsiveWidth(40),
    marginTop: responsiveHeight(14),
  },
  gambarKTP: {
    alignSelf: 'center',
    marginTop: responsiveHeight(19),
    marginBottom: responsiveHeight(5),
  },
  button: {
    backgroundColor: colors.blue600,
    height: responsiveHeight(58),
    width: responsiveWidth(330),
    marginTop: responsiveHeight(26),
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
