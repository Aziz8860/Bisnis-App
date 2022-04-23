import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconLocation} from '../../../assets';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

const CardRiwayat = ({riwayat, navigation}) => {
  return (
    <View style={styles.square}>
      <View style={styles.bagianAtas}>
        <Image source={riwayat.image} />
        <View style={styles.text}>
          <Text style={styles.judul}>{riwayat.title}</Text>
          <Text style={styles.nama}>{riwayat.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconLocation />
            <Text style={styles.alamat}>{riwayat.city}</Text>
          </View>
        </View>
      </View>

      <View style={styles.bagianBawah}>
        <Text style={styles.tanggal}>{riwayat.date}</Text>
        <TouchableOpacity
          style={styles.buttonLihat}
          onPress={() => navigation.navigate('Riwayat Detail', {riwayat})}>
          <Text style={styles.textLihat}>Lihat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardRiwayat;

const styles = StyleSheet.create({
  square: {
    backgroundColor: colors.grayCard,
    height: responsiveHeight(140),
    width: responsiveWidth(360),
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: responsiveHeight(12),
    marginBottom: responsiveHeight(12)
  },
  bagianAtas: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: responsiveWidth(12),
  },
  text: {
    marginLeft: responsiveWidth(12),
  },
  judul: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(14),
    color: colors.black,
  },
  nama: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.grayBold,
  },
  alamat: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(10),
    color: colors.grayLight,
  },
  bagianBawah: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(12),
  },
  tanggal: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(10),
    color: colors.grayLight,
  },
  buttonLihat: {
    backgroundColor: colors.blue600,
    borderRadius: 4,
    paddingHorizontal: responsiveWidth(18),
    paddingVertical: responsiveHeight(3),
  },
  textLihat: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(10),
    color: colors.white,
  },
});
