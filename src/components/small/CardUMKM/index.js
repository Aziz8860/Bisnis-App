import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

const CardUMKM = ({umkm, navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('UMKM Detail', {umkm})}>
        <Image source={umkm.image} style={styles.gambar} />
        <View style={styles.content}>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={styles.tipe}>{umkm.type}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.tipeSertifikat}>Bersertifikat</Text>
              <Text style={styles.tipeExcellent}>Excellent UMKM</Text>
            </View>
            <Text style={styles.judul}>{umkm.title}</Text>
            <Text style={styles.shortDesc}>{umkm.shortDesc}</Text>
          </View>
          <Image source={umkm.progress} style={styles.progressBar} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.moneyAndDays}>Rp {umkm.money}</Text>
            <Text style={styles.moneyAndDays}>{umkm.day} hari lagi</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardUMKM;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    width: responsiveWidth(156),
    height: responsiveHeight(265),
    marginBottom: responsiveHeight(10),
    marginRight: responsiveWidth(12),
    borderRadius: 4,
  },
  gambar: {
    width: responsiveWidth(146),
    height: responsiveHeight(90),
    margin: responsiveHeight(4),
    borderRadius: 2,
    alignSelf: 'center',
  },
  content: {
    paddingHorizontal: responsiveWidth(10),
  },
  tipe: {
    backgroundColor: colors.white,
    color: colors.blue500,
    marginTop: responsiveHeight(-28),
    fontSize: RFValue(8),
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 4,
  },
  tipeSertifikat: {
    marginTop: responsiveHeight(16),
    marginRight: responsiveWidth(4),
    backgroundColor: colors.white,
    color: colors.green,
    borderColor: colors.grayLight,
    borderWidth: 0.5,
    fontSize: RFValue(7),
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 16,
  },
  tipeExcellent: {
    marginTop: responsiveHeight(16),
    backgroundColor: colors.gold,
    color: colors.white,
    fontSize: RFValue(7),
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 16,
  },
  judul: {
    fontFamily: fonts.primary.medium,
    color: colors.black,
    fontSize: RFValue(11),
    marginTop: 4,
  },
  shortDesc: {
    fontFamily: fonts.primary.medium,
    color: colors.grayLight,
    fontSize: RFValue(9),
  },
  progressBar: {
    alignSelf: 'flex-start',
    marginTop: responsiveHeight(6),
    height: responsiveHeight(14),
    width: responsiveWidth(134),
  },
  moneyAndDays: {
    fontFamily: fonts.primary.medium,
    color: colors.grayBold,
    fontSize: RFValue(8),
    marginTop: responsiveHeight(8)
  },
});
